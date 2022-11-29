'use strict'

module.exports = (sequelize, DataTypes) => {
    let Medico = sequelize.define('medico', {
        id:{
            type: DataTypes.BIGINT,
            autoIncrement:true,
            primaryKey: true,
            allowNull: false
        },
        matricula:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        especialidad:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dni:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
            field:'created_at',
            defaultValue:DataTypes.NOW,
            allowNull: false
        },
        updatedAt:{
            type: DataTypes.DATE,
            field:'updated_at',
            defaultValue:DataTypes.NOW,
            allowNull: false
        },
        deletedAt:{
            type: DataTypes.DATE,
            field:'deleted_at'
        }
    }, {
        timestamps: true,
        underscored: true,
        paranoid: true,
        freezeTableName:true
    })

    Medico.associate = models => {
        Medico.belongsToMany(models.paciente, { through: models.tratamiento })
    }
    return Medico
}


    
