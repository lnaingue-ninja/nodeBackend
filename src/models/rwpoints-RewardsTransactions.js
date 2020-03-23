var Sequelize = require('sequelize');
var dbrewardspoints = require('./dbrewardspoints');

var RewardsTransactions = dbrewardspoints.define('rewards_transactions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  mySPHId: Sequelize.STRING,
  action: Sequelize.STRING,
  deviceId: Sequelize.STRING,
  publication : Sequelize.STRING,
  points: Sequelize.INTEGER,
  videoId: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

//Transactions.belongsTo(Transactions);
module.exports = RewardsTransactions;
