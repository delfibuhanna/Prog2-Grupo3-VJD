const  data = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator")

const productosController = {
    index: function (req,res) {
        let relaciones ={
            include: [
                {association: "Usuario"},
                {association: "Comentario"}
            ]
        }
        data.Producto.findAll()
        
            .then(function(resultado) {
                return res.render("index",{lista: resultado})
            
            }).catch(function (errores) {
                return console.log(errores);;
                
            })
    },
    
    product: function (req, res) {
        const id = req.params.id; // Obtiene el ID del producto desde los parámetros de la ruta
        data.Producto.findByPk(id) // Busca el producto por su Primary Key (ID)
            .then(function(producto) {
                if (producto) {
                    res.render("product", { producto: producto }); // Si encuentra el producto, renderiza la vista 'product' con los datos del producto
                } else {
                    res.status(404).send('Producto no encontrado'); // Si no encuentra el producto, envía un error 404
                }
            })
            .catch(function(error) {
                console.log(error);
                res.status(500).send('Error interno del servidor'); // Manejo de errores
            });
    },
    productAdd : function (req,res) {
        res.render("productAdd", {lista: data});
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
        data.Comentario.create({
            usuarioId: req.body.usuarioId,
            productoId: req.body.productoId,
            textoComentario: req.body.textoComentario,
            // createdAt: new Date()
        })
        .then (function (result) {
            return console.log(result)
        })
        .catch (function (errors) {
            return console.log(errors)
        })
    }

};
module.exports = productosController;

