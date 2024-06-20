const {Book} = require("../models/BookM");

const getBooks = async (req, res) => {
	try {
		const response = await Book.findAll();
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
}

const getBookById = async (req, res) => {
	try {
		const response = await Book.findOne({
			where: {
				id: req.params.id
			}
		});
		res.status(200).json(response);
	} catch (error) {
		console.log(error.message);
	}
};

const createBook = async (req, res) => {
	try {
		await Book.create(req.body)
		res.status(201).json({msg: 'user create'});
	} catch (error) {
		console.log(error.message);
	}
};

const updateBook = async (req, res) => {
	try {
		await Book.update(req.body, {
			where: {
				id: req.params.id
			}
		})
		res.status(200).json({msg: 'user update'});
	} catch (error) {
		console.log(error.message);
	}
};

const deleteBook = async (req, res) => {
	try {
		await Book.destroy({
			where: {
				id: req.params.id
			}
		})
		res.status(200).json({msg: 'user delete'});
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = {
	getBooks, deleteBook, updateBook, createBook, getBookById
}