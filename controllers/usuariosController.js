const data = require("../database/models");

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
}

};

module.exports= usuariosController;