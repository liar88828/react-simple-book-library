const {Sequelize} = require('sequelize');

const db = new Sequelize('crud_db',  'root',  '', {
  host: 'localhost',
  dialect: "mysql",
});

module.exports = db
