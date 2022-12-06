const bcrypt = require('bcryptjs')
const errors = require('../const/errors');
const model = require('../database/models/index');
const globalConstants = require('../const/globalConstant')

module.exports = {

    listar: async (req, res, next) => {
        try {
            const loggedUser = res.locals.usuario;
            if (loggedUser && loggedUser.email === globalConstants.MAIL_ADMIN) { //Solo el administrador puede ver datos de todos

                const usuarios = await model.usuario.findAll({
                    attributes: { exclude: ['password','createdAt','updatedAt', 'deletedAt'] }
                })

                res.json({
                    usuarios: usuarios
                })
            } else {
                return next(errors.UsuarioNoAutorizado)
            }   
        } catch (err) {
            return next(err);
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const loggedUser = res.locals.usuario
            let { idUsuario } = req.params;
            const usuario = await model.usuario.findOne({
                where:{
                    id:idUsuario
                },
                attributes: { exclude: ['password','createdAt','updatedAt', 'deletedAt'] }
            })
            if (!usuario) return next(errors.UsuarioInexistente)

            if (((usuario.dni === loggedUser.dni) || loggedUser.email === globalConstants.MAIL_ADMIN)) {
                res.json({
                    usuario: usuario
                })
            } else {
                return next(errors.UsuarioNoAutorizado)
            }
            
        } catch (err) {
            return next(err);
        }

    },

    crear: async (req, res, next) => {
        try{
            const loggedUser = res.locals.usuario;
            if (loggedUser && loggedUser.email === globalConstants.MAIL_ADMIN) { //Solo el administrador puede ver datos de todos

                let persona = req.body;
                persona.password = bcrypt.hashSync(persona.password,10);
                const usuario = await model.usuario.create(persona);
                        
                res.json({
                    usuario: usuario.id
                })
            } else {
                return next(errors.UsuarioNoAutorizado)
            }
        } catch (err) {
            return next(err);
        }
        
    }

}