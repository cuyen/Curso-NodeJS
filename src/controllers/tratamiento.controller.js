const model = require('../database/models/index');

const _handleError = (res, err) => {
    console.log(err);
    res.status(500);
    res.json({
        mensaje: `Error Inesperado ${err}`
    })
}


const _validar = function (tratamiento) {
    return (tratamiento.medicoId 
                && tratamiento.pacienteId 
                && tratamiento.fechaAtencion);
}

module.exports = {

    listar: async (req, res) => {
        try {

            const tratamientos = await model.tratamiento.findAll()

            res.json({
                tratamientos: tratamientos
            })

        } catch (err) {
            _handleError(res, err)
        }
    },

    listarInfo: async (req, res) => {
        try {
            let { idTratamiento } = req.params;
            const tratamiento = await model.tratamiento.findOne({
                where:{
                    id:idTratamiento
                }
            })

            if (tratamiento != null) {
                res.json({
                    tratamiento: tratamiento
                })
            } else {
                res.status(400)
                res.json({
                    error: `No se encontro el tratamiento con id: ${idTratamiento} `
                })
            }

        } catch (err) {
            _handleError(res, err)
        }

    },

    crear: async (req, res) => {
        try {
            let trat = req.body;
            if (_validar(trat)){
                const tratamiento = await model.tratamiento.create(trat);
                res.json({
                    tratamiento: tratamiento.id
                })
            } else {
                res.status(400);
                res.json({
                    mensaje:'Error Validación: Campos requeridos [ medicoId, pacienteId, descripcion, fechaAtencion]'
                })
            }
            
        } catch (err) {
            _handleError(res, err)
        }
       
    }
}