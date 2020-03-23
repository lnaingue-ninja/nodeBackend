const express = require('express');
const router = express.Router();

//importing controllers
const rewardsTransactionsController = require('../controllers/rewardsTransactionsController');

router.get('/totalread',rewardsTransactionsController.totalreadarticle ); //Controller.functionname
router.get('/totalshare',rewardsTransactionsController.totalsharearticle );
router.get('/totalwatch',rewardsTransactionsController.totalwatchvideo );
router.get('/totalredeemed',rewardsTransactionsController.totalredeemed );
router.get('/days/3',rewardsTransactionsController.lastdays );



router.get('/list',rewardsTransactionsController.list );
router.get('/save', (req, res) => {

  res.json({status: 'Data Saved'});

});

module.exports = router;
