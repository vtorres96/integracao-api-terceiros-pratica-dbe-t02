const express = require('express');
const rotas = express();

const viaCepControlador = require('./controladores/viaCepControlador');

rotas.get('/obter-dados-cep', viaCepControlador.obterEnderecoPorCep);

module.exports = rotas;