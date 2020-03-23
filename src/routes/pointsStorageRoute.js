const express = require('express');
const router = express.Router();

//importing controllers
const pointsStorageController = require('../controllers/pointsStoragesController')

router.get('/totalusers',pointsStorageController.totalusers ); //Controller.functionname
router.get('/maximumpoints',pointsStorageController.maximumpoints );
router.get('/minimumpoints',pointsStorageController.minimumpoints );
router.get('/averagepoints',pointsStorageController.averagepoints );
router.get('/median',pointsStorageController.medianpoint );

router.get('/list',pointsStorageController.list );
router.get('/save', (req, res) => {

  res.json({status: 'Data Saved'});

});

module.exports = router;
