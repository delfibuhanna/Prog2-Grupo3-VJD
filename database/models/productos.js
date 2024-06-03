module.exports = function (sequelize, dataTypes) {
    let alias = "productos";
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
    let productos = sequelize.define(alias, cols, config);
    return productos;
}