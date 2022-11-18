module.exports = {

    listar: async (req, res) => {
        try {
            res.json({
                message: "Listado de Pacientes"
            })

        } catch (err) {
            console.log(err)
        }
    },

    listarInfo: async (req, res) => {
        try {
            console.log(req.params);
            let { idPaciente } = req.params;
            res.json({
                message: `Info del Paciente  ${idPaciente}`
            })

        } catch (err) {
            console.log(err)
        }

    },

    crear: async (req, res) => {
        let { nombre } = req.body;
        res.json({
            message: `Paciente creado: ${ nombre }`
        })
    }
}