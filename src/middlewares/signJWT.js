const jwt = require('jsonwebtoken')
const globalConstants = require('../const/globalConstant')

module.exports = function (usuario) {
    if (usuario) {
        const token = jwt.sign({
            id: usuario.id
        },
        globalConstants.JWT_SECRET, {
            expiresIn: 30000
        }
    )
    return token;
    } else {
        return null
    }
}