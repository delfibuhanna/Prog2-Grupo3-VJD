var express = require('express');
var router = express.Router();

var usuariosController = require("../controllers/usuariosController");


router.get('/profile', usuariosController.profile);
router.get('/profile/id/:id',usuariosController.profile);
router.get("/profileEdit", usuariosController.profileEdit); 
router.get("/register", usuariosController.register);

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

 const { where } = require('sequelize');
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
router.get("/register", usuariosController.register);
router.post("/register", validaciones, usuariosController.store);
router.post('/logout',  usuariosController.logout);
router.post("/login", validaciones_login, usuariosController.loginUser);
router.get("/login", usuariosController.login);
router.get('/profile/:id', usuariosController.profile);
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
