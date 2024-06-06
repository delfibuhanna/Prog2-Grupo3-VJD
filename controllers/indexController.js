const data = require("../db/productos");

let indexController= {
  index:function(req,res){
      return res.render("index", {lista: data.productos});
} 
}


module.exports = indexController;