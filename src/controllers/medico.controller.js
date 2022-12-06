const errors = require('../const/errors');
const model = require('../database/models/index');
const globalConstants = require('../const/globalConstant')

module.exports = {
    
    listar: async (req, res, next) => {
        try {
            const loggedUser = res.locals.usuario;
            if (loggedUser && loggedUser.email === globalConstants.MAIL_ADMIN) { //Solo el administrador puede ver datos de todos
                const doctors = await model.medico.findAll({
                    attributes: { exclude: ['createdAt', 'deletedAt'] }
                });
                res.json({
                    medicos: doctors
                })
            } else {
                return next(errors.UsuarioNoAutorizado)
            }
        } catch (err) {
           return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const loggedUser = res.locals.usuario;
            let { idMedico } = req.params;
            const doctor = await model.medico.findOne({
                where: {
                    id:idMedico
                },
                attributes: { exclude: ['createdAt', 'deletedAt'] },
                include: [{
                    model: model.tratamiento,
                    attributes: { exclude: ['createdAt','updatedAt', 'deletedAt', 'pacienteId','medicoId','selfGranted'] },
                    include: [{
                        model:model.paciente,
                        attributes: { exclude: ['createdAt','updatedAt', 'deletedAt'] }
                    }]

                }]
            });

            if (!doctor) {
                return next(errors.MedicoInexistente)
            }

            //Solo un medico puede ver sus propios datos, excepto el admin que puede ver todo
            if (((doctor.dni === loggedUser.dni) || loggedUser.email === globalConstants.MAIL_ADMIN)) {
                res.json({
                    medico: doctor
                })
            } else {
                return next(errors.UsuarioNoAutorizado)
            }

        } catch (err) {
            return next(err)
        }

    },

    crear: async (req, res, next) => {
        try{
            const loggedUser = res.locals.usuario;
            let medico = req.body;
            if (loggedUser && loggedUser.email === globalConstants.MAIL_ADMIN) { 
                const doctor = await model.medico.create(medico);
                res.json({
                    doctor: doctor.id
                })
        } else {
            return next(errors.UsuarioNoAutorizado)
        }
        }catch (err) {
           return next(err)
        }
    }
}

