const db = require('../config/Database');
const {Sequelize} = require("sequelize");
const {DataTypes} = Sequelize

const User = db.define('users', {
	idName: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: DataTypes.STRING,
	email: DataTypes.STRING,
	gender: DataTypes.STRING
}, {freezeTableName: true});


module.exports = {User};
(async () => {
	await db.sync();
})();