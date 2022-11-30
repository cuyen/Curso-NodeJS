const router = require("express").Router();
const pacienteController = require("../controllers/paciente.controller");
const validate = require('../middlewares/validate')
const pacienteSecheme = require('../middlewares/schemes/paciente.scheme')


router.get('/', pacienteController.listar)
router.post('/', validate(pacienteSecheme.crearPaciente), pacienteController.crear)
router.get('/:idPaciente', pacienteController.listarInfo)

module.exports = router;