const log4js = require('log4js');
// Настройки логирования
log4js.configure({
	appenders: {
		// file: { type: 'file', filename: 'my-logger.log' },
		con: { type: 'console' }
	},

	categories: {
		// Логирование в консоль
		default: { appenders: ['con'], level: 'info' },
		// Логирование в файл
		// file: { appenders: ['file'], level: 'info' },
		// Логирование в файл и в консоль
		// fileAndConsole: { appenders: ['file', 'con'], level: 'info' },
	}
});

// Берем логер по категории (указанной нами в конфигурациях)
const logger = log4js.getLogger('default');

// Значение level указывает, начиная с какого уровня важности будут отображаться логи
// level можно изменять в любой необходимый момент
logger.level = 'debug';

// Примеры использования:

// logger.trace("Entering cheese testing");
// logger.debug("Got cheese");
// logger.info("Cheese is Comte");

// Для доступа из других файлов
module.exports = logger;