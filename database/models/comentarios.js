module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuarioId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        productoId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        textoComentario: {
            type: dataTypes.STRING,
            allowNull: false
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

