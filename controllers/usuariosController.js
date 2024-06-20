const data = require("../database/models");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');


const usuariosController ={
    profile: function(req,res){
      return res.render("profile", {lista: data});

}, 
  profileEdit: function(req,res){
    res.render("profileEdit", {lista: data});
},
  login: function(req,res){
    return res.render("login");   
},
  register: function(req,res){
    return res.render("register");
},
loginUser: (req, res)=>{
  let form = req.body;

  let filtro = {
      where: [{mail: form.email}]
  };

  data.Usuario.findOne(filtro)
  .then((result) => {

      if (result == null) return res.send("No existe el mail " +  form.email)
      

      let check = bcrypt.compareSync(form.Contrasenia, result.contrasenia);
      
      if (check) {
          req.session.user = result;

          /* que lo guarde en cookie si el usuario lo tildo */
          if (form.rememberme != undefined) {
              res.cookie("userId", result.id, {maxAge: 1000 * 60 * 15});
          }
          return res.redirect("/");
      } else {
          return res.send("La contraseña es incorrecta")
      }
     /* store: (req, res) => {
        let errores = validationResult(req);
        if (errores.isEmpty()){
          let form = req.body;
          let 
          return res.render ("")
        }
      } */
      
     

  }).catch((err) => {
      return console.log(err);
  });}

};


module.exports= usuariosController;