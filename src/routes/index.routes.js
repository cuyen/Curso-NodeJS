const { Router } = require("express");

const usuarioRoutes = require("./usuario.routes")
const pacienteRoutes = require("./paciente.routes")
const medicoRoutes = require("./medico.routes")
const tratamientoRoutes = require("./tratamiento.routes")

const rutas_init = () => {
    const router = Router()

    router.use("/usuarios", usuarioRoutes)
    router.use("/pacientes", pacienteRoutes)
    router.use("/medicos", medicoRoutes)
    router.use("/tratamientos", tratamientoRoutes)

    return router

};

module.exports = {rutas_init}
