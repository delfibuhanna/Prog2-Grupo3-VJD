const data = require("../database/models");

const productosController = {
    product : function (req,res) {
        res.render("product", {lista: data});
    },
    productAdd : function (req,res) {
        res.render("productAdd", {lista: data});
    },
    searchResults : function (req,res) {
        res.render("search-results", {lista:data.productos});
    }
};
module.exports = productosController;

