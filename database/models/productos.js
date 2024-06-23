module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
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
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        foto: {
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
        underscored: false
    };
    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models){
    Producto.belongsTo(models.Usuario,{
            as: "Usuario",
            foreingKey: "usuarioId"
        });
    Producto.hasMany(models.Comentario,{
            as: "Comentario",
            foreingKey: "productoId"
        });
    
    }
return Producto;
}