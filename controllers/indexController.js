const data = require("../database/models");

let indexController= {
  index:function(req,res){
     data.Usuario.findAll()

  .then(function (resultado) {
    return res.send(resultado)
    
  }) .catch (function (errores) {
        return console.log(errores);;
  })


  }
};

module.exports = indexController;