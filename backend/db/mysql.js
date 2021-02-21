const logger = require('$helpers/logger');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});

exports.init = () => {
	connection.connect((error) => {
		if (error) {
			logger.fatal(`MySQL connection error: ${error.code}`);
		} else {
			logger.info('MySQL successfully connected.');
		}
	});
};

exports.connection = connection;
