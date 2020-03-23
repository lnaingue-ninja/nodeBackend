var RewardsTransactions = require('../models/rwpoints-RewardsTransactions');
var sequelize = require('../models/dbRewardsPoints');

const controller = {}

controller.totalreadarticle = async ( req, res) => {
  sequelize.query('CALL getTotalPointsRead();').then(function(response){
       return res.json(response) ;
      }).error(function(err){
         return res.json(err);
       });
}
controller.totalsharearticle = async ( req, res) => {
  sequelize.query('CALL getTotalPointsShare();').then(function(response){
       return res.json(response) ;
      }).error(function(err){
         return res.json(err);
       });
}

controller.totalwatchvideo = async ( req, res) => {
  sequelize.query('CALL getTotalPointsWatch();').then(function(response){
       return res.json(response) ;
      }).error(function(err){
         return res.json(err);
       });
}

controller.totalredeemed = async ( req, res) => {
  sequelize.query('CALL getTotalPointsRedeemed();').then(function(response){
       return res.json(response) ;
      }).error(function(err){
         return res.json(err);
       });
}

//get the last 3days - make this dynamic as possible
controller.lastdays = async ( req, res) => {
  sequelize.query('CALL getLast3Days();').then(function(response){
       return res.json(response) ;
      }).error(function(err){
         return res.json(err);
       });
}

controller.list = async ( req, res) => {

    const data = await RewardsTransactions.findAll({
      limit: 10,
      order: 'createdAt ASC',
    });
    res.json(data)

}

controller.test = (req,res) => {
  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }

  console.log("Send data from controller transaction");
  res.json(data);

};

module.exports = controller;
