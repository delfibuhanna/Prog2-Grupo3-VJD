const data = require("../db/productos");

const productosController = {
    product : function (req,res) {
        res.render("product", {lista: data});
    },
    productAdd : function (req,res) {
        res.render("productAdd", {lista: data});
    },
    searchResults : function (req,res) {
        res.render("searchResults",{title: "searchResults"});
    }
};

module.exports = productosController;

