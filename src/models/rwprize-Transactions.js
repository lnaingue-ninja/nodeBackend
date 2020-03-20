var Sequelize = require('sequelize');
var dbrewardsprize = require('./dbRewardsPrize');

var Transactions = dbrewardsprize.define('transactions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  uid: Sequelize.STRING,
  status : Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  prizeId: Sequelize.INTEGER, // foreign ???
  fromTransactionId: Sequelize.STRING, // foreign ???
  points: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

module.exports = Transactions;
