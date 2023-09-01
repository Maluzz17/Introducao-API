import dotenv from "dotenv";
dotenv.config();

import express from "express";
import roteadorUsuario from "./routes/usuario.js";
import loginRouter from "./routes/login.js";

const app = express();              
const port = 3000;         

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(roteadorUsuario);
app.use(loginRouter);

app.get("/", (req, res) => {        
    res.json({
        message: "API para CRUD usuario: https://github.com/Maluzz17/Introducao-API" ,
    });
    console.log("Rota / solicitada");
});

app.listen(port, () => {
    console.log(`Serviço escutando na porta:  ${port}`);
});