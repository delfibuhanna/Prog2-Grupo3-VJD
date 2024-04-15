var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var express = require('express');
var router = express.Router();

const indexController = require("../controllers/indexController");

module.exports = router;

