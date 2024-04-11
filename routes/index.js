var express = require('express');
var router = express.Router();

var indexController = require("../controllers/indexController");

router.get("/", indexController.index);
router.get("/login", indexController.login);
router.get("/register", indexController.register);
router.get("/profile", indexController.profile);

module.exports = router;


