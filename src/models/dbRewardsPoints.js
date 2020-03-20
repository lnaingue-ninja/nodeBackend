var Sequelize = require('sequelize');

const dbrewardspoints = new Sequelize(
  'rewardspointssystemdbdev', //database
  'root', //userna,e
  'root', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = dbrewardspoints;
