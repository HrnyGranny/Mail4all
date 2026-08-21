const express = require('express');
const crypto = require('crypto');
const { simpleParser } = require('mailparser');
const Email = require('../models/email');

const router = express.Router();

// ==========================================
// 1. WEBHOOK (Recibe correos de Cloudflare)
// ==========================================
router.post('/receive', async (req, res) => {
    try {
        console.log('Webhook recibido:', req.body);
        // Validación básica de seguridad desde el worker
        if (req.headers['x-cf-secret'] !== 'secreto_cf') {
            return res.status(403).json({ error: "No autorizado" });
        }

        const { recipient, sender, rawContent } = req.body;
        if (!rawContent) return res.status(400).json({ error: "Falta el contenido" });

        // Buscamos el buzón ignorando mayúsculas/minúsculas
        const emailDoc = await Email.findOne({ address: new RegExp(`^${recipient}$`, 'i') });
        if (!emailDoc) return res.status(404).json({ error: "Buzón no encontrado" });

        // Parseamos el raw del correo
        const parsed = await simpleParser(rawContent);

        // Preparamos el objeto del nuevo correo
        const nuevoCorreo = {
            sender: sender,
            subject: parsed.subject || "Sin asunto",
            body: parsed.html || parsed.text || "Sin contenido",
            // receivedAt se genera automáticamente en el modelo
        };

        // Añadimos el correo al array
        emailDoc.inbox.push(nuevoCorreo);
        await emailDoc.save();

        // --- MAGIA DE WEBSOCKETS AQUÍ ---
        // Recuperamos la instancia de Socket.io desde Express
        const io = req.app.get('socketio');
        
        // Obtenemos el último mensaje guardado (para que tenga su _id real y su fecha real)
        const savedMessage = emailDoc.inbox[emailDoc.inbox.length - 1];

        // Emitimos el mensaje a la sala específica (la dirección del buzón)
        io.to(recipient.toLowerCase()).emit('new_email', savedMessage);
        // --------------------------------

        res.status(200).json({ status: "ok" });
    } catch (err) {
        console.error('Error en webhook:', err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// ==========================================
// 2. GENERAR NUEVO BUZÓN
// ==========================================
router.post('/generate', async (req, res) => {
    try {
        const { address } = req.body; // El cliente ya manda el correo completo ej: "hola@m4il.tech"
        if (!address) return res.status(400).json({ error: "La dirección es obligatoria" });

        // Mongoose se encarga de calcular el expiresAt (7 días) por nosotros según el modelo
        const newEmail = new Email({
            address: address.toLowerCase(),
            apiKey: crypto.randomBytes(16).toString('hex'),
            readOnlyKey: crypto.randomBytes(16).toString('hex')
        });

        await newEmail.save();

        res.status(201).json({
            address: newEmail.address,
            apiKey: newEmail.apiKey,
            readOnlyKey: newEmail.readOnlyKey,
            expiresAt: newEmail.expiresAt
        });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ error: "La dirección ya está en uso" });
        }
        res.status(500).json({ error: "Error al generar el correo" });
    }
});

// ==========================================
// 3. OBTENER INBOX (Acepta Master o ReadOnly)
// ==========================================
router.get("/inbox/:address", async (req, res) => {
    try {
        const { address } = req.params;
        const clientKey = req.headers['x-api-key'];

        const emailDoc = await Email.findOne({ address: address.toLowerCase() });
        if (!emailDoc) return res.status(404).json({ error: "Buzón no encontrado" });

        // Validación de llaves directa
        if (emailDoc.apiKey !== clientKey && emailDoc.readOnlyKey !== clientKey) {
            return res.status(401).json({ error: "Acceso denegado" });
        }

        // Devolvemos el inbox (lo ordenamos por fecha descendente)
        const sortedInbox = emailDoc.inbox.sort((a, b) => b.receivedAt - a.receivedAt);
        res.json({ expiresAt: emailDoc.expiresAt, inbox: sortedInbox });
    } catch (err) {
        res.status(500).json({ error: "Error al cargar la bandeja" });
    }
});

// ==========================================
// 4. BORRAR UN MENSAJE (Solo llave Master)
// ==========================================
router.delete('/message/:address/:msgId', async (req, res) => {
    try {
        const { address, msgId } = req.params;
        const clientKey = req.headers['x-api-key'];

        const emailDoc = await Email.findOne({ address: address.toLowerCase() });
        if (!emailDoc) return res.status(404).json({ error: "Buzón no encontrado" });

        // Solo el dueño (Master Key) puede borrar
        if (emailDoc.apiKey !== clientKey) {
            return res.status(403).json({ error: "Solo el creador puede borrar mensajes" });
        }

        emailDoc.inbox = emailDoc.inbox.filter(msg => msg._id.toString() !== msgId);
        await emailDoc.save();

        res.status(200).json({ status: "ok" });
    } catch (err) {
        res.status(500).json({ error: "Error al borrar el mensaje" });
    }
});

// ==========================================
// 5. BORRAR EL BUZÓN ENTERO (Solo llave Master)
// ==========================================
router.delete('/mailbox/:address', async (req, res) => {
    try {
        const { address } = req.params;
        const clientKey = req.headers['x-api-key'];

        const emailDoc = await Email.findOne({ address: address.toLowerCase() });
        if (!emailDoc) return res.status(404).json({ error: "Buzón no encontrado" });

        if (emailDoc.apiKey !== clientKey) {
            return res.status(403).json({ error: "Solo el creador puede destruir el buzón" });
        }

        await Email.deleteOne({ _id: emailDoc._id });
        res.status(200).json({ status: "ok" });
    } catch (err) {
        res.status(500).json({ error: "Error al destruir el buzón" });
    }
});

module.exports = router;