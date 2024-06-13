module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuariosId: {
            type: dataTypes.INTEGER
        },
        productosId: {
            type: dataTypes.INTEGER
        },
        textoComentario: {
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
        underscored: true
    };
    
    let Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function (models){
        Comentario.belongsTo(models.Usuario,{
            as: "Usuario",
            foreignKey: "usuariosId"
        });

    Comentario.belongsTo(models.Producto,{
            as: "Producto",
            foreignKey: "productosId"
        });
    }
    
    return Comentario;
}

