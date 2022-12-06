const Joi = require('joi')
 
let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    dni: Joi.string().required(),
    direccion: Joi.string().required(),
    medicoId:Joi.number().required(),
    descripcion:Joi.string().required()

})

module.exports = {
    crearPaciente
}