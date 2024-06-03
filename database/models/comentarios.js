module.exports = function (sequelize, dataTypes) {
    let alias = "comentarios";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        }
    }
    let config = {
        tableName: "proy",
        timestamps: false,
        underscored: true
    }
    let comentarios = sequelize.define(alias, cols, config);
    return comentarios;
}