const data = require("../database/models");

let indexController= {
  index:function(req,res){
    data.Producto.findAll({
      include:[
        {association: "Usuario"},
        {association: "Comentario"}
      ],
      order: [
        [
          "createdAt", "DESC"
        ]
      ]
    
      
    })
    .then(function (resultado) {
      return res.render("index",{lista: resultado});

  }).catch (function (errores) {
      return console.log(errores);;

})
    }
};

module.exports = indexController;