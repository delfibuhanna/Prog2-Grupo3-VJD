var express = require('express');
var router = express.Router();
var productosController = require("../controllers/productosController");

router.get("/",productosController.product);
router.get("/productAdd",productosController.productAdd);
router.get("/search-results",productosController.searchResults);
router.get("/:id", productosController.productInfo);
router.get("/comentar", productosController.comment);

module.exports = router;