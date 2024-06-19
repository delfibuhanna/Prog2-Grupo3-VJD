const data = require("../database/models");
const bcrypt = require("bcryptjs");

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
      where: [{email: form.email}]
  };

  db.User.findOne(filtro)
  .then((result) => {

      if (result == null) return res.send("No existe el mail " +  form.email)
      

      let check = bcrypt.compareSync(form.Contrasenia, result.contrasenia);
      if (check) {
          req.session.user = result;

          /* que lo guarde en cookie si el usuario lo tildo */
          if (form.rememberme != undefined) {
              res.cookie("userId", result.id, {maxAge: 1000 * 60 * 15});
          }
          return res.redirect("/users");
      } else {
          return res.send("La contraseña es incorrecta")
      }
      
     

  }).catch((err) => {
      return console.log(err);
  });}

};


module.exports= usuariosController;