import { io } from "socket.io-client";
export const socket = io("http://localhost:3000"); // URL --> CHANGUE

// Listeners básicos para saber si la conexión va bien o se cae
socket.on("connect", () => {
    console.log("🟢 WebSocket client successfully connected to backend");
});

socket.on("disconnect", () => {
    console.log("❌ WebSocket client disconnected from backend");
});

socket.on("connect_error", (err) => {
    console.error("⚠️ WebSocket connection error:", err.message);
});