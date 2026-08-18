const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const EmailSchema = new Schema({
    address: { type: String, required: true, unique: true },     // Unique email address assigned to the mailbox
    
    expiresAt: {                                                 // Auto-calculates expiration date: 7 days from creation
        type: Date, 
        default: () => {
            const date = new Date();
            date.setDate(date.getDate() + 7);
            return date;
        }
    }, 
    
    apiKey: { type: String, default: null },                      // Master API Key for full control (Read & Write)
    readOnlyKey: { type: String, default: null },                 // Guest API Key for read-only access
    
    inbox: [{                                                     // Array storing all incoming messages
        sender: String,                                           // Sender's email address
        subject: String,                                          // Subject of the email
        body: String,                                             // Body content of the email
        receivedAt: { type: Date, default: Date.now }             // Timestamp of receipt (auto-generated)
    }] 
});

// TTL index: MongoDB auto-deletes document when expiresAt is reached
EmailSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = model("Email", EmailSchema, "Emails");