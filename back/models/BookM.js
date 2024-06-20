const db = require("../config/Database");
const {Sequelize} = require("sequelize");
const {DataTypes} = Sequelize

const Book = db.define('books', {
	idBook: {
		type:DataTypes.INTEGER,
		primaryKey:true,
		autoIncrement:true},
	book: DataTypes.STRING,
	age: DataTypes.INTEGER,
	stock: DataTypes.INTEGER,
}, {freezeTableName: true});


module.exports = {Book};
(async () => {
	await db.sync();
})();