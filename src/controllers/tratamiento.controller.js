const model = require('../database/models/index');
const { TratamientoInexistente } = require('../const/errors');

const _validar = function (tratamiento) {
    return (tratamiento.medicoId 
                && tratamiento.pacienteId 
                && tratamiento.fechaAtencion);
}

module.exports = {

    listar: async (req, res, next) => {
        try {

            const tratamientos = await model.tratamiento.findAll()

            res.json({
                tratamientos: tratamientos
            })

        } catch (err) {
            return next(error)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            let { idTratamiento } = req.params;
            const tratamiento = await model.tratamiento.findOne({
                where:{
                    id:idTratamiento
                }
            })

            if (!tratamiento) {
                return next(TratamientoInexistente)
            }

            res.json({
                tratamiento: tratamiento
            })

        } catch (err) {
            return next(error)
        }

    },

    crear: async (req, res, next) => {
        try {
            let trat = req.body;
            const tratamiento = await model.tratamiento.create(trat);
            res.json({
                tratamiento: tratamiento.id
            })
            
            
        } catch (err) {
            return next(err)
        }
       
    }
}