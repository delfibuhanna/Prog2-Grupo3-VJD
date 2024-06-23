module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING
        },
        mail: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING,
            allowNull: false
        },
        contrasenia: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        numeroDocumento: {
            type: dataTypes.INTEGER
        },
        foto: {
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
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    };
    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
       Usuario.hasMany(models.Producto, {
            as: "Producto",
            foreignKey: "usuarioId"
        });

        Usuario.hasMany(models.Comentario, {
            as: "Comentario",
            foreignKey: "usuarioId"
        });
    };
    return Usuario;
};