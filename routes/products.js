var express = require('express');
var router = express.Router();
var productosController = require("../controllers/productosController");

router.get("/",productosController.product);
router.get("/productAdd",productosController.productAdd);

router.get("/searchResults",productosController.searchResults);

module.exports = router;