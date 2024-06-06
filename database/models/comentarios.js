module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
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
        }}
    let config = {
        tableName: "proy",
        timestamps: false,
        underscored: true
    };
    
    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models){
        Comentario.belongsTo(models.Usuario,{
            as: "Usuario",
            foreignKey: "usuarios_id"
        });

    Comentario.belongsTo(models.Producto,{
            as: "Producto",
            foreignKey: "productos_id"
        });
    }
    
    return Comentario;
}

