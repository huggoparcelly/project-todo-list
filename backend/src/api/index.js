require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tasks = require('../routes/todoRouter');
const middlewares = require('../middlewares');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/todo', tasks);

app.use(middlewares.error);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
