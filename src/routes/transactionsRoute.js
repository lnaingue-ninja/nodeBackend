const express = require('express');
const router = express.Router();

//importing controllers
const transactionsController = require('../controllers/transactionsController')

router.get('/testdata',transactionsController.testdata ); //Controller.functionname
router.get('/list',transactionsController.list );

router.get('/test',transactionsController.test);
router.get('/save', (req, res) => {

  res.json({status: 'Data Saved'});

});

module.exports = router;
