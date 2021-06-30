const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/angular-ecommerce'));

app.get('/*', (req, res) =>{
    res.sendFile(__dirname + '/dist/angular-ecommerce/index.html');
})

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT)
})