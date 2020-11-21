const express = require('express');
const crypto = require('crypto')
const connection = require('./database/connection');
const routes = express.Router();

//Lista todos os usuarios(*)
routes.get('/users', async(req, res)=>{
    const users = await connection('users').select('*');
    res.json(users);
})

//salva no banco um novo usuario
routes.post('/users', async(req, res)=>{
    const {name, email, idade, empresa} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');//Gera uma strig aleatória de tamanho = 4 bytes
    await connection('users').insert({
        id,
        name,
        email,
        idade,
        empresa
    })
    res.json({id})
})

module.exports = routes;