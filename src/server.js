const express = require('express');
const routes = require('./routes');//Passando o caminho se entende que é um arquivo

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3001);// A aplicação irá rodar na porta 3001
