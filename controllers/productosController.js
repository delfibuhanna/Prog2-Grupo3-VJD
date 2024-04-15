/*let productos = require("../db/productos");*/

let productosController = {
    index : function (req,res) {
        res.render("product", {title: "product"});
    },
    productAdd : function (req,res) {
        res.render("productAdd", {title: "productAdd"});
    }
};



module.exports = productosController;

