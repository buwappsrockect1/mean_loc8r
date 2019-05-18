const express = require('express');
const router = express.Router();

// controllers
const ctrlMain = require('../controllers/main');


/* GET home page. */
router.get('/', ctrlMain.indexController );

module.exports = router;
