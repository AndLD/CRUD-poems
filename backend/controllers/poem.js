const poemModals = require('$models/poem');
const { deleteUndefinedKeys } = require('$helpers/decorators');

exports.post = async (req, res) => {
	const poem = deleteUndefinedKeys({
		title: req.body.title,
		text: req.body.text,
		created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
	});

	const poemId = await poemModals.insertPoem(poem).catch(err => {
		throw('Error [poemModals.insertPoem]:\n', err);
	});

	res.status(200).json({
		error: false,
		data: {
			poemId,
		}
	});
};

exports.put = async (req, res) => {
	const poemId = req.params.id;

	const poem = deleteUndefinedKeys({
		title: req.body.title,
		text: req.body.text,
		created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
	});

	await poemModals.updatePoemById(poemId, poem).catch(err => {
		throw('Error [poemModals.updatePoemById]:\n', err);
	});

	res.sendStatus(200);
};

exports.get = async (req, res) => {
	const poems = await poemModals.selectPoem().catch(err => {
		throw('Error [poemModals.selectPoem]:\n', err);
	});

	res.status(200).json({
		error: false,
		data: {
			poems,
		}
	});
};

exports.getById = async (req, res) => {
	const poemId = req.params.id;

	const poem = await poemModals.selectPoemById(poemId).catch(err => {
		throw('Error [poemModals.selectPoemById]:\n', err);
	});

	res.status(200).json({
		error: false,
		data: {
			poem,
		}
	});
};

exports.deleteById = async (req, res) => {
	const poemId = req.params.id;

	await poemModals.deletePoemById(poemId).catch(err => {
		throw('Error [poemModals.deletePoemById]:\n', err);
	});

	res.sendStatus(200);
};