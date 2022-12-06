const jwt = require('jsonwebtoken')
const errors = require('../const/errors')
const models = require('../database/models/index')
const moment = require('moment')
const globalConstants = require('../const/globalConstant')

module.exports = async function(req, res, next) {
    res.locals.usuario = undefined
    if (req.header('Authorization') && req.header('Authorization').split(' ').length >1) {
        try {
            let dataToken = jwt.verify(req.header('Authorization').split(' ')[1], globalConstants.JWT_SECRET)
            if (dataToken.exp <= moment().unix()){
                return next(errors.SessionExpirada)
            }
            res.locals.token = dataToken
            
            const usuario = await models.usuario.findOne(
                {
                    where: {
                        id: dataToken.id
                    }
                }
            )
            if (!usuario) {
                return next(errors.UsuarioNoAutorizado)
            }
            res.locals.usuario = usuario
            next()

        } catch (error) {
            return next(errors.SessionExpirada)
        }


    } else {
        return next(errors.UsuarioNoAutorizado)
    }
    



}