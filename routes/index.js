var express = require('express');
var router = express.Router();

var indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.get("/login", indexController.login);
router.get("/register", indexController.register);

//login
const loginController = require("../controllers/indexController");

//register
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  const registerController = require("../controllers/indexController");
  
module.exports = router;


