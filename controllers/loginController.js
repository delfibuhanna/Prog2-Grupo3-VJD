let loginController = {
    index : function(req,res){
        res.render("login", {title: "login"});
    }
};
module.exports = loginController;