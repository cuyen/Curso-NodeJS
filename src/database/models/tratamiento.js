'use strict'
/**
 * 
 * Representa el tratamiento que recibe un paciente en su consulta 
 * con un medico específico en una fecha
 * 
 */
 
module.exports = (sequelize, DataTypes) => {
    let Tratamiento =  sequelize.define('tratamiento',{
        id:{
            type: DataTypes.BIGINT,
            autoIncrement:true,
            primaryKey: true,
            allowNull:false
        },
        fechaAtencion:{
            type: DataTypes.DATE,
            defaultValue:DataTypes.NOW,
            allowNull:false,
        },
        descripcion:{
            type: DataTypes.STRING
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
        },
        selfGranted: DataTypes.BOOLEAN
    }, {
        timestamps: true,

        underscored: true,
        paranoid: true,
        freezeTableName:true
    })

    return Tratamiento
}