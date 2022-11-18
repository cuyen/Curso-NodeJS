module.exports = {

    listar: async (req, res) => {
        console.log('Listar')
    },

    listarInfo: async (req, res) => {
        console.log('Info')
    },

    crear: async (req, res) => {
        console.log('Crear')
    },

    prueba: async (req, res) => {
        try {
            console.log('ejecutando prueba')

            res.json({
                message: "Hola mundo"
            })

        } catch (err) {
            console.log(err)
        }

    }

}