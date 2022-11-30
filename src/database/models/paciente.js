'use strict'

module.exports = (sequelize, DataTypes) => {
    let Paciente = sequelize.define('paciente',{
        id:{
            type: DataTypes.BIGINT,
            autoIncrement:true,
            primaryKey: true,
            allowNull:false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    args:true,
                    msg:'El nombre es requerido'
                },
                isAlpha:true
            },
            
        },
        apellido: {
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
        dni:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty:{
                    args:true,
                    msg:'El dni es requerido'
                },
                notNull:true,
                unique: true
            }
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{
                    args:true,
                    msg:'La dirección es requerida'
                },
                notNull:true,
                unique: true,
                isAlphanumeric:true
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
    },{
        timestamps: true,
        underscored: true,
        paranoid: true, //Elimina registro de manera lógicA
        freezeTableName:true //Indica a Sequelize que no cambie el nombe de la tabla a Plural
    })
        
    Paciente.associate = models => {
        Paciente.belongsToMany(models.medico, { through: models.tratamiento })
    }
   
    return Paciente
}