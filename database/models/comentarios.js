module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuarioId: {
            type: dataTypes.INTEGER
        },
        productoId: {
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
        underscored: false
    };
    
    let Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function (models){
        Comentario.belongsTo(models.Usuario,{
            as: "Usuario",
            foreignKey: "usuarioId"
        });

    Comentario.belongsTo(models.Producto,{
            as: "Producto",
            foreignKey: "productoId"
        });
    }
    
    return Comentario;
}

