var express = require('express');
var router = express.Router();

var usuariosController = require("../controllers/usuariosController");

router.get("/login", usuariosController.login);
router.get("/register", usuariosController.register);
router.get('/profile', usuariosController.profile);
router.get("/profileEdit", usuariosController.profileEdit);

module.exports = router;
