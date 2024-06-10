const { Association } = require("sequelize");
const data = require("../db/productos/models");
const { productos } = require("../db/productos");

const productosController = {
    index: function (req,res) {
        db.Producto.findAll({
            include: [
                {association: "Usuario"},
                {association: "Comentario"}
            ]
        })
        
    .then(function(resultado) {
        return res.render("index",{lista: resultado})
            
    }).catch(function (errores) {
        return console.log(errores);;
                
    })
    },
    
    product : function (req,res) {
        res.render("product", {lista: data});
    },
    productAdd : function (req,res) {
        res.render("productAdd", {lista: data});
    },
    searchResults : function (req,res) {
        res.render("search-results", {lista:data.productos});
    },

productInfo: function (req,res) {
    let id = req.params.id
    db.Producto.findByPk(id, {
        include: [
            {association: "Usuario"},
            {association: "Comentario",
                include: [{association: "Usuario"}]
            }]
    })

        .then(function(resultado) {
            return res.render("products",{lista: resultado})
    
        }).catch(function (errores) {
            return console.log(errores);;
        
    })
    },

    search: function(req,res, next) {
        return res.render("products", {lista: productos})
    }
};
module.exports = productosController;

