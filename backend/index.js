require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const tasks = require('./routes/todoRouter');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/todo', tasks);

app.use(middlewares.error);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));