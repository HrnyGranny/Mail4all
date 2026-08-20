// Importamos las peticiones HTTP desde tu archivo de rutas
import { receiveRoutes } from './receiveRoutes'; 
// Importamos la conexión del socket (asegúrate de tener el archivo socket.js)
import { socket } from './socket'; 

export const receiveService = {

    // Método principal para generar el email y suscribirse al socket
    async generateEmail(customAddress, onNewEmail) {
        try {
            // 1. Llamamos a las rutas para crear el buzón en Atlas
            const newMailbox = await receiveRoutes.generateMailbox(customAddress);
            
            // 2. Le decimos al WebSocket que se una a la sala (buzón)
            socket.emit('join_mailbox', newMailbox.address);
            
            // 3. Limpiamos listeners anteriores por si el usuario hace clic varias veces
            socket.off('new_email'); 
            
            // 4. Ponemos el socket a escuchar nuevos correos
            socket.on('new_email', (email) => {
                console.log("📨 New email received via WebSocket!");
                // Ejecutamos el callback para que Vue actualice la interfaz
                onNewEmail(email); 
            });

            // Devolvemos los datos del buzón (incluidas las keys) al componente
            return newMailbox; 

        } catch (error) {
            console.error("❌ Error in generateEmail:", error);
            throw error; // Lanzamos el error para que el frontend lo maneje
        }
    }

};