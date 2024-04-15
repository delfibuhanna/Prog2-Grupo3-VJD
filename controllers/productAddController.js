let product = require("../db/product")

let productAddController = {
    index : function (req,res) {
        res.render("productAdd", {title: "productAdd"});
    }
};
module.exports = productAddController;