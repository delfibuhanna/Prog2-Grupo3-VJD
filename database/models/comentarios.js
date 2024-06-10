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
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }}
    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    };
    
    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models){
        Comentario.belongsTo(models.Usuario,{
            as: "usuarios",
            foreignKey: "usuarios_id"
        });

    Comentario.belongsTo(models.Producto,{
            as: "productos",
            foreignKey: "productos_id"
        });
    }
    
    return Comentario;
}

