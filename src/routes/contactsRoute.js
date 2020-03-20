const express = require('express');
const router = express.Router();

//importing controllers
const contactsController = require('../controllers/contactsController')

router.get('/list',contactsController.list ); //Controller.functionname
router.get('/totaluserswithpoints',contactsController.TotalUsersWithPoints );

module.exports = router;
