const data = require("../database/models");

let indexController= {
  index:function(req,res){
    data.Producto.findAll({
      incluide:[
        {association: "Usuario"},
        {association: "Comentario"}
      ]
    })
    .then(function (resultado) {
      return res.render("index", {lista: data});

  }).catch (function (errores) {
      return console.log(errores);;

})
    }
};

module.exports = indexController;