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
            allowNull: false,
            validate:{
                notNull:true
            }
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    args:true,
                    msg:'El nombre es requerido'
                },
                isAlpha:true
            }
        },
        apellido:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    args:true,
                    msg:'El apellido es requerido'
                },
                isAlpha:true
            }
        },
        especialidad:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    args:true,
                    msg:'La especialidad es requerida'
                },
                notNull:true,
                isAlpha: true                
            }
        },
        dni:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate:{
                notEmpty:{
                    args:true,
                    msg:'El dni es requerido',
                },
                notNull:true
            }
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
        Medico.hasMany(models.tratamiento)
        
    }
    return Medico
}


    
