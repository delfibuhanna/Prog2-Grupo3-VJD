const data = require("../db/productos");

let indexController= {
  index:function(req,res){
      return res.render("index", {lista: data.productos});
},
  login: function(req,res){
      return res.render("login");
},
  register: function(req,res){
      return res.render("register");
}
}


module.exports = indexController;