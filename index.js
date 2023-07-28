import express from "express";  
const app = express();              
const port = 3000;             

app.get("/", (req, res) => {        
    res.json({
        nome: "Maria Luiza",     
    });
    console.log("Rota / solicitada");
});

app.listen(port, () => {
    console.log(`Serviço escutando na porta:  ${port}`);
});