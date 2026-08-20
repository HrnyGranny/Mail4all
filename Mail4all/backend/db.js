const mongoose = require('mongoose');
require('dotenv').config();

// ==========================================
// ATLAS DATABASE CONNECTIONS 
// ==========================================
const receiveDb = mongoose.createConnection(process.env.MONGO_URI_RECEIVE);
receiveDb.on('connected', () => console.log('📥 Successfully connected to Atlas (Receive DB)'));
receiveDb.on('error', (err) => console.error('❌ Error connecting to Receive DB:', err));

const sendDb = mongoose.createConnection(process.env.MONGO_URI_SEND);
sendDb.on('connected', () => console.log('📤 Successfully connected to Atlas (Send DB)'));
sendDb.on('error', (err) => console.error('❌ Error connecting to Send DB:', err));

module.exports = { receiveDb, sendDb };