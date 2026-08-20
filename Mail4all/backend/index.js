require('dotenv').config();
require('./db');
const express = require('express');
const cors = require('cors');

// Importaciones para WebSockets
const http = require('http');
const { Server } = require('socket.io');

// Importamos las DOS rutas
const receiveRoutes = require('./routes/receive');
const sendRoutes = require('./routes/send');

const app = express();
const PORT = process.env.PORT || 3000; 

// ==========================================
// MIDDLEWARES
// ==========================================
app.use(cors());
app.use(express.json());

// ==========================================
// WEBSOCKETS CONFIG
// ==========================================
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(`🔌 WebSocket client connected: ${socket.id}`);

    socket.on('join_mailbox', (address) => {
        const roomName = address.toLowerCase();
        socket.join(roomName);
        console.log(`📡 Client ${socket.id} joined mailbox: ${roomName}`);
    });

    socket.on('disconnect', () => {
        console.log(`❌ Client disconnected: ${socket.id}`);
    });
});

app.set('socketio', io);

// ==========================================
// ROUTES
// ==========================================
app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', message: 'API and WebSockets running smoothly' });
});

app.use('/api/receive', receiveRoutes);
app.use('/api/send', sendRoutes);

// ==========================================
// START SERVER
// ==========================================
server.listen(PORT, () => {
    console.log(`🚀 Backend server listening on port ${PORT}`);
});