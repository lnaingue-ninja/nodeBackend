var Sequelize = require('sequelize');
var dbrewardspoints = require('./dbRewardsPoints');

var PointsStorages = dbrewardspoints.define('points_storages', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  mySPHId: Sequelize.STRING,
  publication : Sequelize.STRING,
  balance: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

//Transactions.belongsTo(Transactions);
module.exports = PointsStorages;
