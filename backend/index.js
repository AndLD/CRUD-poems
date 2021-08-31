const logger = require('$helpers/logger');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { controller } = require('$helpers/decorators');
const poemControllers = require('./controllers/poem');
const mysql = require('$mysql');

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));

// Подключаемся к MySQL
mysql.init();

app.use(express.json());

const poemRouter = express.Router()

	.post('/', controller(poemControllers.post))
	.put('/:id', controller(poemControllers.put))
	.get('/', controller(poemControllers.get))
	.get('/:id', controller(poemControllers.getById))
	.delete('/:id', controller(poemControllers.deleteById));

app.use('/poem', poemRouter);

const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port, host, (err) => {
	if (err) {
		logger.fatal(`Error while starting the server: ${err}`);
	} else {
		logger.info(`Server has been started on http://${host}:${port}`);
	}
});