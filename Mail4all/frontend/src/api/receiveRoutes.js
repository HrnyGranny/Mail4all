const API_URI = 'http://localhost:3000/api'; // URL --> CHANGUE

export const receiveRoutes = {
    
    // ==========================================
    // 0. COMPROBAR ESTADO DEL BACKEND
    // ==========================================
    async checkStatus() {
        try {
            const response = await fetch(`${API_URI}/status`);
            if (!response.ok) throw new Error("Backend responded with an error");
            return await response.json(); 
        } catch (error) {
            console.error("❌ Backend is down or unreachable:", error);
            throw error;
        }
    },

    // ==========================================
    // 1. GENERAR NUEVO BUZÓN
    // ==========================================
    async generateMailbox(address) {
        const response = await fetch(`${API_URI}/receive/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address })
        });
        
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || "Error creating mailbox");
        }
        return await response.json(); 
    },

    // ==========================================
    // 2. OBTENER INBOX
    // ==========================================
    async getInbox(address, apiKey) {
        const response = await fetch(`${API_URI}/receive/inbox/${address}`, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey
            }
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || "Error loading inbox");
        }
        return await response.json(); 
    },

    // ==========================================
    // 3. BORRAR UN MENSAJE
    // ==========================================
    async deleteMessage(address, msgId, masterKey) {
        const response = await fetch(`${API_URI}/receive/message/${address}/${msgId}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': masterKey
            }
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || "Error deleting message");
        }
        return await response.json(); 
    },

    // ==========================================
    // 4. DESTRUIR EL BUZÓN ENTERO
    // ==========================================
    async deleteMailbox(address, masterKey) {
        const response = await fetch(`${API_URI}/receive/mailbox/${address}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': masterKey
            }
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || "Error destroying mailbox");
        }
        return await response.json(); 
    }
};