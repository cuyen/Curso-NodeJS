const model = require('../database/models/index')
const bcrypt = require('bcryptjs')
const signJWT = require('../middlewares/signJWT')
const { CredencialesInvalidas } = require('../const/errors');

module.exports = {

    login: async (req, res, next) => {
        try {
            let { email, password}  = req.body;
            const usuario = await model.usuario.findOne({
                where:{
                    email:email
                }
            })

            let passwordMatched = false;
            if (usuario) {
                passwordMatched = bcrypt.compareSync(password, usuario.password);
            } 
            
            if (!usuario || !passwordMatched) {
                return next(CredencialesInvalidas);
            }

            res.json({
                success: true,
                token: signJWT(usuario),
                id: usuario.id
            })
        } catch (err) {
            return next(err)
        }
    },
    
    registrarse: async (req, res, next) => {
        try{
            let persona = req.body;
            persona.password = bcrypt.hashSync(persona.password,10);
            const usuario = await model.usuario.create(persona);
                    
            res.json({
                usuario: usuario.id
            })
           
        } catch (err) {
            return next(err);
        }
        
    }
   

}