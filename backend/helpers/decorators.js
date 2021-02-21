const logger = require('$helpers/logger');

// Оборачивает контроллер проверкой try catch
exports.controller = callback => {
	return async function (req, res) {
		try {
			await callback(req, res);
		} catch (err) {
			logger.error(`Error [${req.method}, ${req.originalUrl}]:\n`, err);
			res.sendStatus(500);
		}
	};
};

// Удаляем из объекта все свойства, значения которых undefined
exports.deleteUndefinedKeys = obj => {
	const newObj = {};

	for (const key in obj) {
		if (obj[key] !== undefined) newObj[key] = obj[key];
	}

	return newObj;
};

// Удаляем из объекта свойства, которые соответствуют указанным в массиве
exports.deleteMatchedKeys = (obj, arr) => {
	const newObj = {};

	for (const key in obj) {
		if (!arr.find(elem => elem == key)) newObj[key] = obj[key];
	}
	
	return newObj;
};