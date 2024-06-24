var express = require('express');
var router = express.Router();
var productosController = require("../controllers/productosController");
const {body} = require("express-validator")

let validacion = [
    body("imagen")
        .notEmpty()
        .withMessage("Debe ingresar una imagen")
        .bail(),
    body("producto")
        .notEmpty()
        .withMessage("Debe ingresar un nombre")
        .bail(),
    body("descripcion")
        .notEmpty()
        .withMessage("Debe ingresar una descripción")
        .bail(),
]


router.get("/",productosController.product);
router.get("/productAdd",productosController.productAdd);
router.get("/search-results",productosController.searchResults);
router.get("/:id", productosController.productInfo);
router.get("/comentar", productosController.comment);

router.post("/productAdd/redirect", validacion, productosController.store);

module.exports = router;