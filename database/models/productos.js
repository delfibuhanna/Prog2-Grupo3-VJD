module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuariosId: {
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        fotoProducto: {
            type: dataTypes.STRING
        },
        descripcion: {
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
        }
    }
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true
    };
    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models){

    Producto.belongsTo(models.Usuario,{
            as: "Usuario",
            foreingKey: "usuariosId"
        });
    Producto.hasMany(models.Comentario,{
            as: "Comentario"
        });
    
    }
return Producto;
}