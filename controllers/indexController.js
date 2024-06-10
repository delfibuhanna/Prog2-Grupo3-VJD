const data = require("../database/models");

let indexController= {
  index:function(req,res){
<<<<<<< HEAD
     data.Usuario.findAll()
=======
      return res.render("index", {lista: data.productos});
} 
}
>>>>>>> 5ee87bf2c150efcd361c126522e5db64c49e7cd2

  .then(function (resultado) {
    return res.send(resultado)
    
  }) .catch (function (errores) {
        return console.log(errores);;
  })


  }
};

module.exports = indexController;