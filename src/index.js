//index.js
import roteadorUsuario from "./routes/usuario.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import roteadorLogin from "./routes/login.js";


const app = express();              
const port = 3000;                  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(roteadorUsuario);
app.use(roteadorLogin);

app.get("/", (req, res) => {        
  res.json({
    nome: "Maria Luiza da Silva Santos",      
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {           
  console.log(`Serviço escutando na porta:  ${port}`);
});