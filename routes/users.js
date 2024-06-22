var express = require('express');
var router = express.Router();

var usuariosController = require("../controllers/usuariosController");


router.get("/register", usuariosController.register);
router.get('/profile', usuariosController.profile);
router.get("/profileEdit", usuariosController.profileEdit); 

const data = require("../database/models")

const { body } = require("express-validator");
let validaciones = [ 
    body("Email")
        .notEmpty().withMessage("Debes completar el email").bail()
        .isEmail().withMessage("Ingrese un mail válido")
        .custom(function(value, {req}) {
            return db.usuarios.findOne({
                where:{ email:req.body.Email},
            })
            .then(function(usuarios) {
                if (usuarios) {
                    throw new Error("El email ingresado ya existe");
                }
            })
        }),
    body ("Usuario")
        .notEmpty().withMessage("Ingrese un nombre de usuario").bail(),
    body("pass")
        .isLength({min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres"),

];

router.get("/register", usuariosController.register);
router.post("/register", validaciones, usuariosController.store);
router.post('/logout',  usuariosController.logout);
router.post("/login", usuariosController.loginUser);
router.get("/login", usuariosController.login);
router.get('/profile/:id', usuariosController.profile);


 /* const { where } = require('sequelize');
const indexController = require('../controllers/indexController');
let validaciones_login = [ 
    body("email")
        .notEmpty().withMessage("Debes completar el email").bail()
        .isEmail().withMessage("Este email no es válido")
        .custom(function(value,{req}){
            return data.Usuario.findOne({
                where: { email: req.body.email }
            })
                .then(function(usuario){
                    if (usuario){
                        throw new Error("El email ingresado ya existe")
                    }
                })
        }),
    body("email")
    .notEmpty().withMessage("Ingrese su nombre de usuario").bail(), 
    body("Contrasenia")
        .notEmpty().withMessage("Ingrese su contraseña").bail()
        .isLength({ min: 4 }).withMessage("La contraseña debe tener al menos 4 caracteres"),
];
/*        .custom(function(value, { req }){
             db.usuarios.findOne({   /* email iria o usuarios??? */
             /*   where: { email: req.body.email },
                })
                .then(function(usuarios){
                    if(usuarios){  /* que más falta???*/
/*}
            }) 
        })
    ]*/

   
/* router.get("/",usuariosController.index);
router.get("/create", usuariosController.create);
 */



module.exports = router;


