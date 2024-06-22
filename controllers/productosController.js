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
      ]
    })
      .then(function (resultado){
        return res.render( "profile" ,{ lista: resultado })
      }).catch(function (errores) {
        return console.log(errores);
      })

  },
  profileEdit: function (req, res) {
    res.render("profileEdit", { lista: data });
  },
  login: function (req, res) {
    return res.render("login");
  },
  register: function (req, res) {
    return res.render("register");
  },
  loginUser: (req, res) => {
    let form = req.body;

    let filtro = {
      where: [{ mail: form.email }]
    };

    data.Usuario.findOne(filtro)
      .then((result) => {

        if (result == null) return res.send("No existe el mail " + form.email)


        let check = bcrypt.compareSync(form.Contrasenia, result.contrasenia);

        if (check) {
          req.session.user = result;

          /* que lo guarde en cookie si el usuario lo tildo */
          if (form.rememberme != undefined) {
            res.cookie("userId", result.id, { maxAge: 1000 * 60 * 15 });
          }
          return res.redirect("/");
        } else {
          return res.send("La contraseña es incorrecta")
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

    //  if (errores.isEmpty()){
    let form = req.body;

    let usuarios = {
      mail: form.Email,
      nombre: form.nombre,
      apellido: form.apellido,
      usuario: form.usuario,
      contrasenia: bcrypt.hashSync(form.pass, 12),
      fechaNacimiento: form.fecha,
      numeroDocumento: form.number,
      foto: "/images/users" + form.fotoDePerfil
    };
    data.Usuario.create(usuarios)
      .then(function (resultado) {
        return res.redirect("/users/login");
      })
      .catch(function (error) {
        return console.log(error);
      });

    // } else{
    //   return res.render("/users/register", {errors: errors.mapped(), old: req.body})
    // } 
  }, logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("userId");
    return res.redirect('/');
  }


};
module.exports = productosController;

