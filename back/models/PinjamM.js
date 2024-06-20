const db = require('../config/Database');
const {Sequelize} = require("sequelize");
const {Book} = require("./BookM");
const {User} = require("./UserModel");
const {DataTypes} = Sequelize


const Pinjam = db.define(
	'pinjams',
	{
		// idName: {
		// 	type: DataTypes.INTEGER,
		// 	references: {
		// 		model: User,
		// 		key: 'idName'
		// 	}
		// },
		// idBook: {
		// 	type: DataTypes.INTEGER,
		// 	references: {
		// 		model: Book,
		// 		key: 'idBook'
		// 	}
		// }

		alasan: DataTypes.TEXT,
		denda: DataTypes.INTEGER

	}, {freezeTableName: true})
Book.hasMany(Pinjam,
	{foreignKey: 'idBook'})
// Pinjam.belongsTo(Book);
// User.belongsToMany({book, through: Pinjam})

User.hasMany(Pinjam,
	{foreignKey: 'idName'})
// Pinjam.belongsTo(User);

module.exports = {Pinjam};
(async () => {
	await db.sync();
})()