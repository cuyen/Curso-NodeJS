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
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dni:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
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