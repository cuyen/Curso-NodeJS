const errors = require('../const/errors');
const model = require('../database/models/index');
const globalConstants = require('../const/globalConstant')
const Joi = require('Joi')

module.exports = {
    listar: async (req, res, next) => {
        try {
            
            const loggedUser = res.locals.usuario;

            if (loggedUser && loggedUser.email === globalConstants.MAIL_ADMIN) { //Solo el administrador puede ver datos de todos
                const pacientes = await model.paciente.findAll({
                    attributes: { exclude: ['createdAt', 'deletedAt'] }
                })
                res.json({
                    pacientes: pacientes
                })
    
            } else {
                return next(errors.UsuarioNoAutorizado);
            }
            
            
        } catch (err) {
            return next(err);
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            
            const loggedUser = res.locals.usuario;

            let { idPaciente } = req.params;
            const paciente = await model.paciente.findOne({
                where:{
                    id:idPaciente
                },
                attributes: { exclude: ['createdAt', 'deletedAt'] },
                include:[{
                    model:model.tratamiento,
                    attributes: { exclude: ['createdAt','updatedAt', 'deletedAt', 'pacienteId','medicoId','selfGranted'] },
                    include:[{
                        model: model.medico,
                        attributes: { exclude: ['createdAt','updatedAt', 'deletedAt'] }
                    }]
                }]
            })

            if (!paciente) return next(errors.PacienteInexistente);
            
            //Solo un paciente puede ver sus propios datos, excepto el admin que puede ver todo
            if (((paciente.dni === loggedUser.dni) || loggedUser.email === globalConstants.MAIL_ADMIN)) {
                res.json({
                    paciente: paciente
                })
            } else {
                return next(errors.UsuarioNoAutorizado);
            }
            

        } catch (err) {
            return next(err);
        }

    },

    crear: async (req, res, next) => {
        try{
            let persona = req.body;
            const loggedUser = res.locals.usuario;

            if (loggedUser && loggedUser.email === globalConstants.MAIL_ADMIN) { //Solo el administrador puede ver datos de todos

                const paciente = await model.paciente.create(persona);
                const tratamiento =  await model.tratamiento.create({
                    pacienteId: paciente.id,
                    medicoId: persona.medicoId,
                    descripcion:persona.descripcion,
                    fechaAtencion: new Date()
                })
                
                res.json({
                    paciente: paciente.id
                })
            } else next(errors.UsuarioNoAutorizado)

        } catch (err) {
            return next(err);
        }
        
    }
}


