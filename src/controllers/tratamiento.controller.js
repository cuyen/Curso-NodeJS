module.exports = {

    listar: async (req, res) => {
        try {
            res.json({
                message: "Listado de tratamientos"
            })

        } catch (err) {
            console.log(err)
        }
    },

    listarInfo: async (req, res) => {
        try {
            console.log(req.params);
            let { idTratamiento } = req.params;
            res.json({
                message: `Info del tratamiento  ${idTratamiento}`
            })

        } catch (err) {
            console.log(err)
        }

    },

    crear: async (req, res) => {
        let { codigo } = req.body;
        res.json({
            message: `Tratamiento creado: ${ codigo }`
        })
    }
}