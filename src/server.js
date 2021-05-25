import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("<h1>This is Home</h1>");
};

const handleLogin = (req, res) => {
    return res.send("This is Login");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => 
    console.log(`✅ Server Listening on port http://localhost:${PORT} 💪`);

app.listen(PORT, handleListening);