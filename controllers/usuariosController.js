const data = require("../database/models");
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');
const { Association } = require("sequelize");


const usuariosController = {
  profile: function (req, res) {
    let id = req.params.id
    data.Usuario.findByPk(id, {
      include: [
        {
          association: "Comentario",
        },
        {
          association: "Producto",
          include: [{ association: "Comentario" }]
        }
      ],
      order: [["createdAt", "DESC"]]
    })
      .then(function (resultado){
        return res.render( "profile" ,{ lista: resultado })
      }).catch(function (errores) {
        return console.log(errores);
      })

  },
  profileEdit: function (req, res) {
    let id = req.session.user.id;

    data.Usuario.findByPk(id)
    .then(function (result) {
      res.render("profileEdit", { user: result });
    })
    .catch(function (error) {
      return console.log(error);
    })
  },
  login: function (req, res) {
    return res.render("login");
  },
  register: function (req, res) {
    return res.render("register");
  },
  update: function(req, res) {
    let errors = validationResult(req);
    if(errors.isEmpty()) {
      let form = req.body;
      let id = form.id;

      let usuario = {
        mail: form.email,
        nombre: form.nombre,
        apellido: form.apellido,
        usuario: form.usuario,
        fechaNacimiento: form.fecha,
        numeroDocumento: form.documento,
        foto: form.fotoPerfil
      }

      if(form.password != '******') {
        usuario.contrasenia = bcrypt.hashSync(form.password, 12)
      }
      
      data.Usuario.update(usuario, {
        where: {id: id}
      })
      .then(function (result) {
        return res.redirect("/");
      })
      .catch(function (error) {
        return console.log("ERROR:  ", error)
      })
    } else {
      console.log("Errores: ", errors)
      return res.render("profileEdit", {errors: errors.mapped(), old: req.body});
    }
  },
  
  loginUser: function (req, res) {
    let errores = validationResult(req);
    let form = req.body;

    let filtro = {
      where: [{ 
        mail: form.email
      }]
    };

    data.Usuario.findOne(filtro)
      .then((result) => {

        if (result == null) return res.render("login", { errors: errores.mapped(), old: form });


        let check = bcrypt.compareSync(form.password, result.contrasenia);

        if (check) {
          req.session.user = result;

          //que lo guarde en cookie si el usuario lo tildo 
          if (form.rememberme != undefined) {
            res.cookie("userId", result.id, { maxAge: 1000 * 60 * 15 });
          }
          return res.redirect("/");
        } else {
          res.render("login", { errors: errores.mapped(), old: form });
        }
      }).catch((err) => {
        return console.log(err);
      });
  }
  ,

  create: (req, res) => {
    res.render("/users/register")
  },
  store: function (req, res) {
    let errores = validationResult(req);

     /* if (errores.isEmpty()){ */
    let form = req.body;

    let usuarios = {
      mail: form.email,
      nombre: form.nombre,
      apellido: form.apellido,
      usuario: form.usuario,
      contrasenia: bcrypt.hashSync(form.password, 12),
      fechaNacimiento: form.fecha,
      numeroDocumento: form.documento,
      foto: "/images/users/" + form.fotoPerfil
    };
    data.Usuario.create(usuarios)
      .then(function (resultado) {
        return res.redirect("/users/login");
      })
      .catch(function (error) {
        return console.log(error);
      });

     /* } else{
     return res.render("/users/register", {errors: errors.mapped(), old: req.body})
    } */
  }, logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("userId");
    return res.redirect('/');
  }


};

module.exports = usuariosController;