const {Pinjam} = require('../models/PinjamM')

const getPinjam = async (req, res) => {
	const response = await Pinjam.findAll()
	res.status(200).json(response)
}

const getPinjamById = async (req, res) => {
	const response = await Pinjam.findOne({
		where: {
			id: req.params.id
		}
	})
	res.status(200).json(response)
}

const createPinjam = async (req, res) => {
	await Pinjam.update(req.body, {
		where: {
			id: req.params.id
		}
	})
	res.status(200).json({msg: 'Pinjam Update'})
}

const updatePinjam = async (req, res) => {
	await Pinjam.update(req.body, {
		where: {
			id: req.params.id
		}
	})
	res.status(200).json({msg: 'Pinjam update'});
}

const deletePinjam = async (req, res) => {
	await Pinjam.destroy({
		where: {id: req.params.id}
	})
	res.status(200).json({msg: 'Pinjam delete'})
}

module.exports = {deletePinjam, updatePinjam, createPinjam, getPinjam, getPinjamById}