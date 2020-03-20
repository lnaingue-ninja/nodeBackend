var Sequelize = require('sequelize');
var dbrewardsprize = require('./dbRewardsPrize');

var WheelOptions = dbrewardsprize.define('wheel_options', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  wheelId: Sequelize.INTEGER,
  option_name : Sequelize.STRING,
  prizeId: Sequelize.INTEGER,
  option_id: Sequelize.INTEGER,
  probability: Sequelize.FLOAT,
  Label: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
},
{
	 timestamps: false,
});

module.exports = WheelOptions;
