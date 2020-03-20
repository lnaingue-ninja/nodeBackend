var Sequelize = require('sequelize');
var dbrewardsprize = require('./dbRewardsPrize');

var Contacts = dbrewardsprize.define('contacts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  contact_number : Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  unit_number: Sequelize.STRING,
  postal_code: Sequelize.STRING,
  transactionId: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

//Transactions.belongsTo(Transactions);
module.exports = Contacts;
