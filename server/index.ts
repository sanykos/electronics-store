require('dotenv').config();
import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
const fileupload = require('express-fileupload');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleWare');

const PORT = process.env.PORT || 5000;

const app: Application = express();

app.use(cors());
app.use(express.json());
// Картинку можно открыть по ссылке http://localhost:8000/dfa9abac-2b86-4152-9ebd-e0bf0f40e087.jpg
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileupload({}));
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    // Подключение к базе данных
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log('Server is running');
    });
  } catch (e) {
    console.log(e);
  }
};
start();
