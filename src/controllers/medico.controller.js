const model = require('../database/models/index');

const _validar = (medico) => {
    return (medico.apellido 
                && medico.matricula 
                && medico.nombre 
                && medico.especialidad 
                && medico.dni);
} 

const _handleError = (res, err) => {
    console.log(err);
    res.status(500);
    res.json({
        mensaje: `Error Inesperado creando medico ${err}`
    })
}

module.exports = {
    
    listar: async (req, res) => {
        try {

            const doctors = await model.medico.findAll(
                
            );
            res.json({
                medicos: doctors
            })

        } catch (err) {
            _handleError(res,err);
        }
    },

    listarInfo: async (req, res) => {
        try {
            let { idMedico } = req.params;
            const doctor = await model.medico.findOne({
                include: model.paciente,
                where: {
                    id:idMedico
                }
            });

            if (doctor != null) {
                res.json({
                    medico: doctor
                })
            } else {
                res.status(400)
                res.json({
                    error: `No se encontro el médico con id: ${idMedico} `
                })
            }

        } catch (err) {
            _handleError(res,err)
        }

    },

    crear: async (req, res) => {
        try{
            let medico = req.body;
            console.log(medico)
            if (_validar(medico)){
                const doctor = await model.medico.create(medico);
                res.json({
                    doctor: doctor.id
                })
            } else {
                res.status(400);
                res.json({
                    mensaje:'Error Validación: Campos requeridos [matricula, nombre, especialidad, dni]'
                })
            }
            
           
        }catch (err) {
            _handleError(res,err)
        }
    }
}

