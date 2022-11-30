const express = require('express');
const globalConstants = require('./const/globalConstant') 
const routerConfig = require('./routes/index.routes')
let errorHandler = require('./middlewares/error')
let createError = require('http-errors')

const configuracionApi = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true})); 
    return
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init())

    app.use(function(req, res, next){
        next(createError(404))
    })

    app.use(errorHandler)
}

const init = () => {
    const HOSTNAME = '127.0.0.1';
    const app = express();
    configuracionApi(app);
    configuracionRouter(app) 
    app.listen(globalConstants.PORT, HOSTNAME, () => {
        console.log(`Server running at http://${HOSTNAME}:${globalConstants.PORT}/`);
    });

}

init();