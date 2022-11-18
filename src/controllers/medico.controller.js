module.exports = {

    listar: async (req, res) => {
        try {
            res.json({
                message: "Listado de Médicos"
            })

        } catch (err) {
            console.log(err)
        }
    },

    listarInfo: async (req, res) => {
        try {
            let { idMedico } = req.params;
            res.json({
                message: `Info del Médico  ${idMedico}`
            })

        } catch (err) {
            console.log(err)
        }

    },

    crear: async (req, res) => {
        let { matricula } = req.body;
        res.json({
            message: `Médico creado: ${matricula} `
        })
    }
}