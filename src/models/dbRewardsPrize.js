var Sequelize = require('sequelize');

const dbrewardsprize = new Sequelize(
  'rewardsdbdev', //database
  'root', //userna,e
  'root', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = dbrewardsprize;
