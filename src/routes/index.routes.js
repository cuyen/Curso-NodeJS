const { Router } = require("express");

const pacienteRoutes = require("./paciente.routes")
const medicoRoutes = require("./medico.routes")
const tratamientoRoutes = require("./tratamiento.routes")
const usuarioRoutes = require("./usuario.routes")
const authRoutes = require("./auth.routes")
const decodeJWT = require('../middlewares/decodeJWT')

const rutas_init = () => {
    const router = Router()

    router.use("/pacientes", decodeJWT, pacienteRoutes)
    router.use("/medicos",decodeJWT,  medicoRoutes)
    router.use("/tratamientos", decodeJWT, tratamientoRoutes)
    router.use("/usuarios", decodeJWT, usuarioRoutes)


    return router

};

const rutas_auth = () => {
    const router = Router()

 
    router.use("/auth", authRoutes)


    return router
}
module.exports = {rutas_init, rutas_auth}
