var WheelOptions = require('../models/rwpoints-WheelOptions');
sequelize = require('../models/dbRewardsPrize');

const controller = {}

controller.testdata = async ( req, res) => {

  const response = await sequelize.sync().then(function() {
     const data =  WheelOptions.findAll()
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response)

}

controller.list = async ( req, res) => {

    const data = await WheelOptions.findAll();
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
