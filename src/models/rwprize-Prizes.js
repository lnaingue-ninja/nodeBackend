var Sequelize = require('sequelize');
var dbrewardsprize = require('./dbRewardsPrize');

var Prizes = dbrewardsprize.define('prizes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  image_url: Sequelize.STRING,
  quantity_limit : Sequelize.STRING,
  description: Sequelize.STRING,
  terms_conditions: Sequelize.STRING,
  how_to_redeem: Sequelize.STRING,
  total_inventory: Sequelize.STRING,
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  category: Sequelize.STRING,
  point1: Sequelize.INTEGER,
  point2: Sequelize.INTEGER,
  point3: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

module.exports = Prizes;
