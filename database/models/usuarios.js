const { ForeignKeyConstraintError } = require("sequelize");

module.exports = function (sequelize, dataTypes) {
    let alias = "usuairos";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuarios_id: {
            type: dataTypes.INTEGER
        },
        productos_id: {
            type: dataTypes.INTEGER
        },
        texto_comentario: {
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
        }
    }
    let config = {
        tableName: "proy",
        timestamps: false,
        underscored: true
    }
    let usuarios = sequelize.define(alias, cols, config);
    usuarios.associate = function (models) {
        usuarios.belongsTo(models.prodcutos,{
            as: "productos",
          /*ForeignKey*/
        });
    }
    let usuarios = sequelize.define(alias, cols, config);
    usuarios.associate = function (models) {
        usuarios.belongsTo(models.comentarios,{
            as: "comentarios",
          /*ForeignKey*/
        })
    return usuarios;
}