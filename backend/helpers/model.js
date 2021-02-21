// Собрать строку запроса на добавление
exports.constructInsertQueryString = (table, rows, onDublicateKeyUpdate) => {
	const keys = Object.keys(rows[0]);
	const rowsValues = [];
	rows.forEach(row => {
		if (row.id) return;
		const arr = [];
		Object.values(row).forEach((value, i) => {
			if (value || value == '') {
				arr.push(`'${value}'`);
			} else {
				keys.splice(i, 1);
			}
		});
		rowsValues.push(`(${arr})`);
	});
	return rowsValues.length > 0 ? `INSERT INTO ${table}(${keys}) VALUES ${rowsValues} ${onDublicateKeyUpdate ? `ON DUPLICATE KEY UPDATE ${onDublicateKeyUpdate}` : ''}` : null;
};

// Собрать строку запроса на изменение по id
exports.constructUpdateQueryString = (table, row, id, idField, matchers) => {
	// Определяем поля для SET
	const fields = Object.entries(row);
	const rowUpdates = [];
	fields.forEach(field => field[0] != 'id' && field[1] !== undefined ? rowUpdates.push(`${field[0]} = '${field[1]}'`) : null);
	// Опеределяем поля для WHERE
	const rowsConditions = [];
	if (id) rowsConditions.push(`${idField ? idField : 'id' } = ${id}`);
	else if (matchers && matchers.length > 0)
		matchers.forEach(matcher => {
			if (matcher.length == 2)
				rowsConditions.push(`${matcher[0]} = '${matcher[1]}'`);
		});
	return rowUpdates.length > 0 && rowsConditions.length > 0 ? `UPDATE ${table} SET ${rowUpdates} WHERE ${rowsConditions.toString().replace(/,/g, ' AND ')}` : null;
};

// Собрать строку запроса на удаление по id либо 
exports.constructDeleteQueryString = (table, id, idField='id', matchers) => {
	const rowsDeletes = [];
	if (id) rowsDeletes.push(`${idField} = ${id}`);
	else if (matchers && matchers.length > 0)
		matchers.forEach(matcher => {
			if (matcher.length == 2)
				rowsDeletes.push(`${matcher[0]} = '${matcher[1]}'`);
		});
	return rowsDeletes.length > 0 ? `DELETE FROM ${table} WHERE ${rowsDeletes.toString().replace(/,/g, ' AND ')}` : null;
};