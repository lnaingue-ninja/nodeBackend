var Sequelize = require('sequelize');
var dbrewardsprize = require('./dbRewardsPrize');

var PointsStorages = dbrewardsprize.define('points_storages', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  mySPHId: Sequelize.STRING,
  publication : Sequelize.STRING,
  balance: Sequelize.INT,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

//Transactions.belongsTo(Transactions);
module.exports = PointsStorages;
