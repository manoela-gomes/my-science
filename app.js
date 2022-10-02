const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const GenerateImage = require('./controllers/GenerateImage.js');
const GenerateText = require('./controllers/GenerateText.js');

/* Iniciar a função do express */
const app = express();

/* Permitir a manipulação de dados em formato JSON */
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://my-science-front.herokuapp.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* Criar a rota raiz */
app.post("/dalle", GenerateImage.generateImage)

app.post("/summarize",GenerateText.summarize)
    //return res.json({titulo: "Como criar API"});
    
    
var port = process.env.PORT || 80

/* Rodar o projeto na porta 8080 */
app.listen(port, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});