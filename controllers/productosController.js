/*let productos = require("../db/productos");*/

const productosController = {
    product : function (req,res) {
        res.render("product", {title: "product"});
    },
    productAdd : function (req,res) {
        res.render("productAdd", {title: "productAdd"});
    },
    searchResults : function (req,res) {
        res.render("searchResults",{title: "searchResults"});
    }
};

module.exports = productosController;

