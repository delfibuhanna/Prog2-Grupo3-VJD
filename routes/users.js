var express = require('express');
var router = express.Router();

var usuariosController = require("../controllers/usuariosController");

router.get("/login", usuariosController.login);
router.get("/register", usuariosController.register);
router.get('/profile', usuariosController.profile);
router.get("/profileEdit", usuariosController.profileEdit);

/*const { body } = require("express-validator");
let validaciones = [ 
    body("Email")
        .notEmpty().withMessage("Debes completar el email").bail()
        .isEmail()
        .custom(function(value) {
            db.usuarios.findOne({
                where:{ email:value },
            })
            .then(function(usuarios) {
                if (usuarios) {
                    throw new Error("El email ingresado ya existe");
                }
            })
        }),
    body("pass")
        .isLength({min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres"),

];
    /* body("Usuario") no sabemos si hay que poner algo mas o no */

const { where } = require('sequelize');
/*let validaciones_login = [ 
    body("email")
        .notEmpty().withMessage("Debes completar el email").bail()
        .isEmail().withMessage("Este email no se encuentra en la base de datos"),
    body("Contrasenia")
        .custom(function(value, { req }){
             db.usuarios.findOne({   /* email iria o usuarios??? */
             /*   where: { email: req.body.email },
                })
                .then(function(usuarios){
                    if(usuarios){  /* que más falta???*/
/*}
            }) 
        })
    ]*/


module.exports = router;
