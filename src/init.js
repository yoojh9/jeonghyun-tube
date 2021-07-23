import "regenerator-runtime";
import dotenv from "dotenv/config"
import app from "./server"

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
