var Sequelize = require('sequelize');
var dbrewardspoints = require('./dbrewardspoints');

var RewardsRules = dbrewardspoints.define('rewards_rules', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  action: Sequelize.STRING,
  publication : Sequelize.STRING,
  platform: Sequelize.STRING,
  points: Sequelize.INT,
  isSubscriber: Sequelize.TINYINT,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

//Transactions.belongsTo(Transactions);
module.exports = RewardsRules;
