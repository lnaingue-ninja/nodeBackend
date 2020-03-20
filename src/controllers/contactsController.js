var Contacts = require('../models/rwprize-Contacts');
var sequelize = require('../models/dbRewardsPrize');

const controller = {}

controller.TotalUsersWithPoints = async ( req, res) => {
  sequelize.query('CALL getTotalContactsWithTransactions();').then(function(response){
       return res.json(response) ;
      }).error(function(err){
         return res.json(err);
       });
}

controller.list = async ( req, res) => {
    const data = await Contacts.findAll();
    res.json(data);
}

module.exports = controller;
