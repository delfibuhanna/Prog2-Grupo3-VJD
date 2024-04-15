var express = require('express');
var router = express.Router();

var productosController = require("../controllers/productosController");

router.get("/",productosController.index)

module.exports = router;
