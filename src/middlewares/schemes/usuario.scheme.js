const Joi = require('joi')
 
let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    email:Joi.string().required(),
    dni:Joi.number().required(),
    edad:Joi.number().optional(),
    password:Joi.string().required()
})

module.exports = {
    crearUsuario
}