const { query } = require('./model');
const { RESOLVE_NULL, RESOLVE_ONE_ROW, RESOLVE_MANY_ROWS, RESOLVE_INSERT_ID } = require('$helpers/constants').modelResolveTypes;
const { constructInsertQueryString, constructUpdateQueryString, constructDeleteQueryString } = require('$helpers/model');

const poems = 'poems';

exports.insertPoem = poem => query(
	constructInsertQueryString(poems, [poem]),
	RESOLVE_INSERT_ID
);

exports.updatePoemById = (id, poem) => query(
	constructUpdateQueryString(poems, poem, id),
	RESOLVE_NULL
);

exports.selectPoem = () => query(
	`SELECT * FROM ${poems}`,
	RESOLVE_MANY_ROWS
);

exports.selectPoemById = id => query(
	`SELECT * FROM ${poems} WHERE id = ${id}`,
	RESOLVE_ONE_ROW
);

exports.deletePoemById = id => query(
	constructDeleteQueryString(poems, id),
	RESOLVE_ONE_ROW
);