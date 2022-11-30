const { MedicoInexistente } = require('../const/errors');
const model = require('../database/models/index');

module.exports = {
    
    listar: async (req, res, next) => {
        try {

            const doctors = await model.medico.findAll();
            res.json({
                medicos: doctors
            })

        } catch (err) {
           return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            let { idMedico } = req.params;
            const doctor = await model.medico.findOne({
                include: model.paciente,
                where: {
                    id:idMedico
                }
            });

            if (!doctor) {
                return next(MedicoInexistente)
            }
                
            res.json({
                medico: doctor
            })

        } catch (err) {
            return next(err)
        }

    },

    crear: async (req, res, next) => {
        try{
            let medico = req.body;
            const doctor = await model.medico.create(medico);
            res.json({
                doctor: doctor.id
            })
           
        }catch (err) {
           return next(err)
        }
    }
}

