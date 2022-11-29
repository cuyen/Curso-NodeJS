const model = require('../database/models/index');

const _validar = function (paciente) {
    return (paciente.direccion 
                && paciente.apellido 
                && paciente.nombre 
                && paciente.dni);
} 

const _handleError = (res, err) => {
    console.log(err);
    res.status(500);
    res.json({
        mensaje: `Error Inesperado creando paciente ${err}`
    })
}


module.exports = {
    listar: async (req, res) => {
        try {
            const pacientes = await model.paciente.findAll()
            res.json({
                pacientes: pacientes
            })

        } catch (err) {
            _handleError(res, err);
        }
    },

    listarInfo: async (req, res) => {
        try {
            
            let { idPaciente } = req.params;
            const paciente = await model.paciente.findOne({
                include: model.medico,
                where:{
                    id:idPaciente
                }
            })
            if (paciente != null) {
                res.json({
                    paciente: paciente
                })
            } else {
                res.status(400)
                res.json({
                    error: `No se encontro el paciente con id: ${idPaciente} `
                })
            }

        } catch (err) {
            _handleError(res, err);
        }

    },

    crear: async (req, res) => {
        try{
            let persona = req.body;
            console.log(persona);
            if (_validar(persona)){
                const paciente = await model.paciente.create(persona);
                res.json({
                    paciente: paciente.id
                })
            } else {
                res.status(400);
                res.json({
                    mensaje:'Error Validación: Campos requeridos [ direccion, apellido, nombre, dni]'
                })
            }
           
        } catch (err) {
            _handleError(res, err);
        }
        
    }
}


