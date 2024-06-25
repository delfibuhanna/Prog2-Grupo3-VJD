var express = require('express');
var router = express.Router();
var usuariosController = require("../controllers/usuariosController");
const data = require("../database/models")
const { body } = require("express-validator");


router.get('/profile', usuariosController.profile);
router.get('/profile/:id', usuariosController.profile);
router.get("/profileEdit/", usuariosController.profileEdit); 
router.get("/register", usuariosController.register);

let validacionesEdit = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar el mail")
        .isEmail()
        .withMessage("Ingrese un mail válido")
        .custom(function (value, {req}) {
            
            if( value != req.session.user.mail ) {
                return data.Usuario.findOne({
                    where: {mail: value}
                })
                .then(function (resultado) {
                    if(resultado) {
                        throw new Error("El mail ingresado ya pertenece a otro usuario")
                    }
                })
            } else {
                return true;
            }
        }),
        body ("usuario")
            .notEmpty()
            .withMessage("Ingrese un nombre de usuario")
            .bail(),
        body("password")
            .notEmpty().withMessage("La contraseña debe tener al menos 4 caracteres")
            .isLength({ min: 4 })


]

let validacionesRegister = [ 
    body("email")
        .notEmpty().withMessage("Debes completar el email").bail()
        .isEmail().withMessage("Ingrese un mail válido")
        .custom(function(value) {
            return data.Usuario.findOne({
                where:{ mail: value},
            })
            .then(function(usuarios) {
                if (usuarios) {
                    throw new Error("El email ingresado ya existe");
                }
            })
        }),
    body ("usuario")
        .notEmpty().withMessage("Ingrese un nombre de usuario").bail(),
    body("password")
        .notEmpty()
        .isLength({min: 4 })
        .withMessage("La contraseña debe tener al menos 4 caracteres"),

];

let validacionesLogin = [
    body("email")
        .custom(function (value) {
            return data.Usuario.findOne({
                where: { mail: value }
            })
            .then(function (user) {
                if(!user) {
                    throw new Error("La dirección de mail ingresada es incorrecta")
                }
            })
        }),
    body("password")
        .custom(function (value) {
            return data.Usuario.findOne({
                where: { contrasenia: value }
            })
            .then(function (user) {
                if(!user) {
                    throw new Error("La contraseña ingresada es incorrecta")
                }
            })
        })
]

router.get("/register", usuariosController.register);
router.post("/register", validacionesRegister, usuariosController.store);
router.post('/logout', usuariosController.logout);
router.get("/login", usuariosController.login);
router.post("/login/redirect", validacionesLogin, usuariosController.loginUser);
router.post("/profileEdit/:id", validacionesEdit, usuariosController.update);

 /* const { where } = require('sequelize');
const indexController = require('../controllers/indexController');
let validaciones_login = [ 
    body("mail")
        .custom(function(value,{req}){
            return data.Usuario.findOne({
                where: { mail: req.body.mail }
            })
                .then(function(usuario){
                    if (!usuario){
                        throw new Error("El email ingresado no existe")
                    }
                })
        }),
    body("Contrasenia")
    .custom(function(value){
        return data.Usuario.findOne({
            where: {Contrasenia: value}, 
    })
        .then(function(Contrasenia){
            if (!Contrasenia){
                throw new Error("La contraseña ingresada es inexistente")
            }
        })
})
];          

/*.custom(function(value, { req }){
             db.usuarios.findOne({  
                where: { email: req.body.email },
                })
                .then(function(usuarios){
                    if(usuarios){  
                    ];
     }})
     });

   
//router.get("/",usuariosController.index);
//router.get("/create", usuariosController.create);*/
 



module.exports = router;
