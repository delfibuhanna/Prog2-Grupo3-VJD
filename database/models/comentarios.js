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
        updateAt: {
            type: dataTypes.DATE
        },
        deleteAt: {
            type: dataTypes.DATE
        }}
    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true
    };
    
    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function (models){
        Comentario.belongsTo(models.Usuario,{
<<<<<<< HEAD
            as: "usuarios",
=======
            as: "Usuario",
>>>>>>> 5ee87bf2c150efcd361c126522e5db64c49e7cd2
            foreignKey: "usuarios_id"
        });

    Comentario.belongsTo(models.Producto,{
<<<<<<< HEAD
            as: "productos",
=======
            as: "Producto",
>>>>>>> 5ee87bf2c150efcd361c126522e5db64c49e7cd2
            foreignKey: "productos_id"
        });
    }
    
    return Comentario;
}

