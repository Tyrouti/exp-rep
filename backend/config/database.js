const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.SQLITE_STORAGE_PATH || 'database.sqlite' 
});

module.exports = sequelize;
