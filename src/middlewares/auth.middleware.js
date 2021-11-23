import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./../config/config"

export const verificaAuth = function(req, res, next){
    let token = null;

    if(req.header('authorization')){
        //token = req.headers.Authorization.aplit(" ")[1]; // Authorization: Bearer abc.xyz.opq
        token = req.header('authorization').split(" ")[1];
    }

    if(!token){
        return res.status(403).send({
            auth: false,
            error: true,
            mensaje: "No se proporcionó el token de seguridad"
        })
    }
    
    // verificamos el token
    jwt.verify(token, JWT_SECRET, (error, decode) => {
        if(error){
            return res.status(401).send({
                auth: false,
                error: true,
                mensaje: "Error de Authenticación"
            })
        }

        next();
    })   

}