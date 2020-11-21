const express = require('express');

/*const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('db.sqlite', (err)=>{
    if(err){
        return console.error(err.message);
    }
    console.log('conectado com sucesso!!')
});*/

/**
 * Driver: Select * from users
 * Query Builders: table('users').select(*).where('')
 */

const app = express();
app.use(express.json());

//req recebe todas as requisições da página
//res é a resposta do que vai ser exibido na página
//o get faz a const app escutar o url passada como parâmetro
/*app.get('/', (req, res)=>{ 
    res.send('Hello World!')
})*/

/**
 * GET: buscar/listar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Parâmetros:
  * Query: parâmetros enviados na rota
  * Route params: parâmetros utilizados para identificar um recurso
  * Request body: corpo da requisição
  */

app.get('/users', (req, res)=>{
    const params = req.query
    console.log(params)
    /*res.json({
        nome: 'Victor',
        empresa: 'UESB'
    })*/
    res.json(params)
})

app.post('/users/:id', (req, res)=>{
    const params = req.params
    console.log(params)
    res.json(params)
})

app.post('/users/', (req, res)=>{
    const params = req.body
    console.log(params)
    res.json(params)
})





app.listen(3001);// A aplicação irá rodar na porta 3001
