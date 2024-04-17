const data = require("../db/productos");

const usuariosController ={
    profile: function(req,res){
        return res.render("profile", {title: "profile"});

}, 
  profileEdit: function(req,res){
    res.render("profileEdit", {title: "profileEdit"});
},

};

module.exports= usuariosController;