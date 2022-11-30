const { PacienteInexistente } = require('../const/errors');
const model = require('../database/models/index');

const Joi = require('Joi')

module.exports = {
    listar: async (req, res, next) => {
        try {
            const pacientes = await model.paciente.findAll()
            res.json({
                pacientes: pacientes
            })

        } catch (err) {
            return next(err);
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            
            let { idPaciente } = req.params;
            const paciente = await model.paciente.findOne({
                include: model.medico,
                where:{
                    id:idPaciente
                }
            })

            if (!paciente) return next(PacienteInexistente);
            res.json({
                paciente: paciente
            })

        } catch (err) {
            return next(err);
        }

    },

    crear: async (req, res, next) => {
        try{
            let persona = req.body;
            const paciente = await model.paciente.create(persona);
            res.json({
                paciente: paciente.id
            })
           
        } catch (err) {
            return next(err);
        }
        
    }
}


