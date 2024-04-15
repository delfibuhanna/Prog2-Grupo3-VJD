var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


var profileController = require("../controllers/usuariosController");
var profileEditController = require("../controllers/usuariosController");

module.exports = router;
