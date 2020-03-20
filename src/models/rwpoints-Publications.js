var Sequelize = require('sequelize');
var dbrewardspoints = require('./dbrewardspoints');

var Publications = dbrewardspoints.define('publications', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

//Transactions.belongsTo(Transactions);
module.exports = Publications;
