const { response } = require("express")
const errors = require("../const/errors")

module.exports = function(err, req, res, next) {
    let response = {
        success: false,
        error: {
            code: err.code || 500,
            message: err.message || 'Internal Server error'
        }
    }

    if (err.message === 'Not Found') {
        response.error.code = 404
        response.error.message = 'Not Found'
    }

    if (err.isJoi) {
        let validationErrorType = err.details[0].type
        let errorKey = 'ValidationError'
        if(validationErrorType === 'any.required'){
            errorKey = 'camposRequeridos'
        }
        response.error.code = errors[errorKey].code
        response.error.message = errors[errorKey].message
    }

    if (err.name === 'Not allowed by CORS'){
        response.error.code = 403
    }

    if (err.name === "SequelizeDatabaseError" && err.message.indexOf('out of range' >= 0)){
        response.error.code = errors['ValidationError'].code
        response.error.message = errors['ValidationError'].message
    }

    if (err.name === "SequelizeConnectionError") {
        response.error.code = 500
        response.error.message = 'Internal Server error'
    }

    res.status(200).json(response)

}