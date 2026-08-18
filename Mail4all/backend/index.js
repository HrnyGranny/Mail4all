const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importaciones para WebSockets
const http = require('http');
const { Server } = require('socket.io');

// Importamos nuestras rutas
const emailRoutes = require('./routes/emails');

const app = express();
const PORT = 3000;

// ==========================================
// CONFIGURACIÓN DE MIDDLEWARES
// ==========================================
app.use(cors()); // Permite peticiones desde el frontend
app.use(express.json()); // Permite al servidor entender JSON

// ==========================================
// CONFIGURACIÓN DE WEBSOCKETS
// ==========================================
// 1. Creamos el servidor HTTP envolviendo la app de Express
const server = http.createServer(app);

// 2. Inicializamos Socket.io sobre ese servidor
const io = new Server(server, {
    cors: {
        origin: "*", // En producción, pon aquí la URL de tu frontend de Vue
        methods: ["GET", "POST"]
    }
});

// 3. Lógica de conexión de WebSockets
io.on('connection', (socket) => {
    console.log(`🔌 Cliente conectado vía WebSocket: ${socket.id}`);

    // Cuando el frontend pida unirse a una "sala" (una dirección de correo)
    socket.on('join_mailbox', (address) => {
        const roomName = address.toLowerCase();
        socket.join(roomName);
        console.log(`📡 Cliente ${socket.id} se unió al buzón: ${roomName}`);
    });

    socket.on('disconnect', () => {
        console.log(`❌ Cliente desconectado: ${socket.id}`);
    });
});

// **TRUCO CLAVE:** Hacemos que la instancia de 'io' esté disponible 
// en las rutas de Express para poder emitir mensajes desde routes/emails.js
app.set('socketio', io);

// ==========================================
// CONEXIÓN A BASE DE DATOS
// ==========================================
mongoose.connect('mongodb://localhost:27017/mail4all')
    .then(() => console.log('📦 Conectado a MongoDB local correctamente'))
    .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// ==========================================
// RUTAS
// ==========================================
// Ruta base para comprobar estado
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', message: 'API y WebSockets funcionando al 100%' });
});

// Conectamos las rutas de los correos
app.use('/api/emails', emailRoutes);

// ==========================================
// ARRANCAR EL SERVIDOR
// ==========================================
// OJO: Ahora usamos server.listen, no app.listen
server.listen(PORT, () => {
    console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});