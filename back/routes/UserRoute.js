const express = require('express');
const {getUsers, getUserById, createUser, deleteUser, updateUser} =
	require('../controller/UserController');

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = {router}