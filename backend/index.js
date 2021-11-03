require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const { getTask } = require('./controllers/todoController');

const app = express();
// const tasks = require('./routes/todoRouter');

app.use(bodyParser.json());
app.get('/todo', getTask);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));