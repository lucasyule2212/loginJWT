const jwt = require('jsonwebtoken');

const authenticationController = {

     checkTokenAdmin: function (req,res,next) {
        const token = req.header('authorization-token');
        if (!token) {
            return res.status(401).send("ACCESS DENIED!")
        }
        
        try {
            const userVerified = jwt.verify(token,process.env.TOKEN_SECRET);
            req.user=userVerified;
            next();
        } catch (error) {
            return res.status(401).send("ACCESS DENIED!")
        }
        if (req.user.admin) {
            res.send("Esse dado só deve ser visto pelo ADMIN");
        }else{
            res.send("Usuario nao ADMIN");
        }     
    },
    checkTokenFree: function (req,res,next) {
        const token = req.header('authorization-token');
        if (!token) {
            return res.status(401).send("ACCESS DENIED!")
        }
        
        try {
            const userVerified = jwt.verify(token,process.env.TOKEN_SECRET);
            req.user=userVerified;
            next();
        } catch (error) {
            return res.status(401).send("ACCESS DENIED!")
        }
        res.send("Esse dado deve ser visto por quem está LOGADO");    
    }
}


module.exports = authenticationController;