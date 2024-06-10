const data = require("../database/models");

let indexController= {
  index:function(req,res){

     data.Comentario.findAll()
  .then(function (resultado) {
    return res.send({lista: resultado});

  }).catch (function (errores) {
    return console.log(errores);;

})
    }};

module.exports = indexController;