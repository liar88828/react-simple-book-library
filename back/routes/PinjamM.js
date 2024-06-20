const express = require('express')
const {getPinjam, getPinjamById, createPinjam, updatePinjam, deletePinjam} = require("../controller/PinjamC");
const routerPinjam = express.Router();


routerPinjam.get('/pinjams', getPinjam)
routerPinjam.get('/pinjams/:id', getPinjamById)
routerPinjam.post('/pinjams', createPinjam)
routerPinjam.patch('/pinjams/:id', updatePinjam)
routerPinjam.delete('/pinjams/:id', deletePinjam)
module.exports = {routerPinjam}