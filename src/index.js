const express = require('express');
const rotas = require('./rotas')

const aplicacao = express();

aplicacao.use(express.json())
aplicacao.use(rotas)

aplicacao.listen(3000)