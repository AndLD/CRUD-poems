const logger = require('$helpers/logger');
const mysql = require('$mysql');
const { modelResolveTypes } = require('$helpers/constants');

exports.query = (queryString, resolveType) => {
	return new Promise((resolve, reject) => {
		if (!queryString || queryString == '') return reject('queryString is empty.');
		mysql.connection.query(queryString, (err, result) => {
			if (err) {
				logger.error(`MySQL query (${queryString}) finished with error: ${err.code}`);
		
				reject(err);
			} else {
				logger.debug(`MySQL query (${queryString}) successfully done.`);
		
				switch (resolveType) {
				case modelResolveTypes.RESOLVE_NULL: resolve(null);
					break;
				case modelResolveTypes.RESOLVE_ONE_ROW: resolve(result[0]);
					break;
				case modelResolveTypes.RESOLVE_MANY_ROWS: resolve(result);
					break;
				case modelResolveTypes.RESOLVE_INSERT_ID: resolve(result.insertId);
					break;
				case modelResolveTypes.RESOLVE_CHANGED_ROWS_COUNT: resolve(result.changedRows);
					break;
				}
			}
		});
	});
};