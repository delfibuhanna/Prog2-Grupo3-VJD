module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        mail: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        numeroDocumento: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };
    let Usuario = sequelize.define(alias, cols, config);
<<<<<<< HEAD
    /*Usuario.associate = function (models) {
        Usuario.hasMany(models.prodcutos, {
            as: "productos",
        });

        Usuario.hasMany(models.comentarios, {
            as: "comentarios",
=======
    Usuario.associate = function (models) {
        Usuario.hasMany(models.productos,{
            as: "Producto",
        });
    
    Usuario.hasMany(models.comentarios,{
            as: "Comentario",
>>>>>>> 5ee87bf2c150efcd361c126522e5db64c49e7cd2
        });
        ...
    }*/
    return Usuario;
}