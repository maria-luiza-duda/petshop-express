const express = require('express')
const petshop = require('./petshop')

const app = express();

app.listen(8000, () => {
    console.log('Servidor rodando!')
});

console.log(petshop.listarPets());