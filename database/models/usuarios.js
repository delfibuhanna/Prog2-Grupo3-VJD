const { ForeignKeyConstraintError } = require("sequelize");

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
            type: dataTypes.INT
        },
        foto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATA
        },
        updateAt: {
            type: dataTypes.DATA
        },
        deleteAt: {
            type: dataTypes.DATA
        }}
    
    let config = {
        tableName: "proy",
        timestamps: false,
        underscored: true
    };
    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function (models) {
        Usuario.hasMany(models.prodcutos,{
            as: "productos",
        });
    
    Usuario.hasMany(models.comentarios,{
            as: "comentarios",
        });
    }
    return Usuario;
}