var Transactions = require('../models/rwprize-Transactions');
var sequelize = require('../models/dbRewardsPrize');

const controller = {}

controller.testdata = async ( req, res) => {

  const response = await sequelize.sync().then(function() {
     const data =  Transactions.findAll()
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response)

}

controller.list = async ( req, res) => {

    const data = await Transactions.findAll();
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
