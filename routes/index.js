let express = require('express');
let router = express.Router();

let Controller = require('../controllers/Controller');

/* GET home page. */
router.get('/', Controller.index);


module.exports = router;
