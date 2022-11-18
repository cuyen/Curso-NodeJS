const express = require('express');
const globalConstants = require('./const/globalConstant') 
const routerConfig = require('./routes/index.routes')

const configuracionApi = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true})); 
    return
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init())
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