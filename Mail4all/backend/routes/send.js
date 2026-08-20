const express = require('express');
const router = express.Router();

// Ruta de prueba para que Express no se queje
router.get('/test', (req, res) => {
    res.json({ message: 'Ruta de envíos lista para meterle caña' });
});

// ESTO ES LO QUE TE FALTABA PARA QUE NO CRASHEE, GORDITO
module.exports = router;