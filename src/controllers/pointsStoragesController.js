var PointsStorages = require('../models/rwpoints-PointsStorages');
var sequelize = require('../models/dbRewardsPoints');

const controller = {}

// total points (all users)
controller.totalusers= async ( req, res) => {
  const response = await sequelize.sync().then(function() {
     const data =  PointsStorages.count();
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response);
}

controller.maximumpoints= async ( req, res) => {
  const response = await sequelize.sync().then(function() {
     const data =  PointsStorages.findAll({
       attributes : [ [sequelize.fn('MAX', sequelize.col('balance')),'max'] ]
     });
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response);
}

controller.minimumpoints= async ( req, res) => {
  const response = await sequelize.sync().then(function() {
     const data =  PointsStorages.findAll({
       attributes : [ [sequelize.fn('MIN', sequelize.col('balance')),'min'] ]
     });
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response);
}

controller.averagepoints= async ( req, res) => {
  const response = await sequelize.sync().then(function() {
     const data =  PointsStorages.findAll({
       attributes : [ [sequelize.fn('AVG', sequelize.col('balance')),'average_value'] ]
     });
     return data;
  })
  .catch(err => {
    return err;
  });
  res.json(response);
}

controller.medianpoint = async ( req, res) => {
  sequelize.query('CALL getMedianPoint();').then(function(response){
       return res.json(response) ;
      }).error(function(err){
         return res.json(err);
       });
}



controller.list = async ( req, res) => {
    const data = await PointsStorages.findAll();
    res.json(data);
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
