var Publications = require('../models/rwpoints-Publications');
var sequelize = require('../models/dbRewardsPoints');

const controller = {}

controller.testdata = async ( req, res) => {

  const response = await sequelize.sync().then(function() {
     const data =  Publications.findAll()
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response)

}

controller.list = async ( req, res) => {

    const data = await Publications.findAll();
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
