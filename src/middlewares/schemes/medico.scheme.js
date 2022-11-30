const Joi = require('joi')
 
let crearMedico = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    dni: Joi.string().required(),
    matricula: Joi.string().required(),
    especialidad: Joi.string().required()
})

module.exports = {
    crearMedico
}