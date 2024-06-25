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

let validacionComentario = [
    body("comentario")
        .notEmpty()
        .isLength({ min: 3 })
        .withMessage("El comentario debe tener al menos 3 caracteres.")
        .bail()
]

router.get("/productAdd",productosController.productAdd);
router.get("/search-results",productosController.searchResults);
router.get("/:id", productosController.productInfo);
router.get("/comentar", productosController.comment);

router.post("/productAdd/redirect", validacion, productosController.store);
router.get("/productDelete/:id", productosController.productDelete);
router.get("/productEdit/:id", productosController.productEdit);
router.post("/productEdit/", validacion, productosController.update);
router.post("/comment", validacionComentario, productosController.comment)

module.exports = router;