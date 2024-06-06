module.exports = function (sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        usuarios_id: {
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        foto: {
            type: dataTypes.STRING
        },
        descripcion: {
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
        }
    }
    let config = {
        tableName: "proy",
        timestamps: false,
        underscored: true
    };
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function (models){
        Producto.belongsTo(models.Usuario,{
            as: "Usuario",
            foreingKey: "usuarios_id"
        });
    Producto.hasMany(models.Comentario,{
        as: "Comentario",
        })

    }
    return productos;
}
