//let productos = requiere ('../db/productos');

let usuariosController={
    index: function(req,res){
        res.render("profile", {title: "profile"});

}, 
  profileEdit: function(req,res){
    res.render("profileEdit", {title: "profileEdit"});

}
};


module.exports= usuariosController;