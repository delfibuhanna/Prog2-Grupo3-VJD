const  data = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator")

const productosController = {
    
    productAdd : function (req,res) {
        res.render("productAdd", {lista: data});
    },

    productDelete : function (req, res) {
        let id = req.params.id;

        data.Producto.destroy({
            where: [{ id: id}]
        })
        .then(function (result) {
            return res.redirect("/")
        })
        .catch(function (error) {
            return console.log(error)
        })
    },

    productEdit: function (req, res) {
        let id = req.params.id;

        data.Producto.findByPk(id)
        .then(function (result) {
            return res.render("productEdit", { data: result });
        })
        .catch(function (error) {
            return console.log(error);
        })
    },

    store: function (req, res){
        let errores = validationResult(req);
        if (errores.isEmpty()) {
            let form = req.body
            let producto = {
                usuarioId: req.session.user.id,
                foto: "/images/products/" + form.imagen,
                nombre: form.producto,
                descripcion: form.descripcion
            }
            console.log("PRODUCTO NUEVO: ", producto)

            data.Producto.create(producto)
            .then(function (resultado) {
                return res.redirect("/");
            })
            .catch(function (error) {
                return console.log(error)
            })
        } else {
            res.render("productAdd", {errores: errores.mapped()})
        }
    },

    update: function(req, res) {
        let form = req.body;
        let producto = {
            usuarioId: req.session.user.id,
            foto: form.imagen,
            nombre: form.producto,
            descripcion: form.descripcion
        }
        
        data.Producto.update(producto, {
            where: [{ id: form.id }]
        })
        .then(function (result) {
            return res.redirect("/product/" + form.id);
        })
        .catch(function (error) {
            return console.log(error);
        })
    },
    
    searchResults : function (req,res) {
        let terminoBusqueda = req.query.search;
        console.log("termino de busqueda", terminoBusqueda)
        data.Producto.findAll({
            where: {
                [Op.or]: [
                    {
                        nombre: {
                            [Op.like]: `%${terminoBusqueda}%` // Busca productos que contengan el término de búsqueda en el nombre
                        }
                    },
                    {
                        descripcion: {
                            [Op.like]: `%${terminoBusqueda}%` // Busca productos que contengan el término de búsqueda en la descripción
                        }
                    }
                ]
            },
            include: [
                { model: data.Usuario, as: "Usuario"},
                { model: data.Comentario, as: "Comentario"}
            ],
            order: [['createdAt', 'DESC']]
        })
        .then(function(resultado) {
            console.log('Resultados de búsqueda:', resultado);
            if (!resultado && resultado.length == 0) {
                // Asegura que se pase una lista vacía si no hay resultados
                return res.render("search-results", { lista: [], message: "No hay resultados para su criterio de búsqueda" });
            } else {
                return res.render("search-results", { lista: resultado });
            }
        })
        .catch(function (errores) {
            console.log(errores);
            return res.status(500).send('Error interno del servidor');
        });

    },

    productInfo: async function (req, res) {
        let id = req.params.id;
        try {
            let producto = await data.Producto.findByPk(id, {
                include: [
                    { model: data.Usuario, as: "Usuario" },
                    { model: data.Comentario, as: "Comentario",
                        include: [{
                            model: data.Usuario, as: "Usuario"
                        }],
                        order: [['createdAt', 'DESC']]
                    }
                ]
            });
            if (!producto) {
                console.log("No encontre el producto");
                // Si no se encuentra el producto, renderizar una vista con un mensaje de error o redirigir
                return res.render("product", { error: "Producto no encontrado" });
            } else {
                console.log("Producto: ", producto);
                // Si se encuentra el producto, renderizar la vista product.ejs con los detalles del producto
                return res.render("product", { producto: producto });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send('Error interno del servidor');
        }
    },
    comment: function(req, res) {
        let form = req.body
        data.Comentario.create({
            usuarioId: form.usuarioId,
            productoId: form.productoId,
            textoComentario: form.comentario,
            // createdAt: new Date()
        })
        .then (function (result) {
            return res.redirect("/product/" + form.productoId);
        })
        .catch (function (errors) {
            return console.log(errors);
        })
    }

};
module.exports = productosController;

