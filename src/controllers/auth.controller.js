import { Usuario } from "./../models/usuario"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async function(req, res){
    let datos = req.body
    // buscar al usuario por email
    const user = await Usuario.findOne({
        email: datos.email
    });

    if(!user){
        res.json({
            mensaje: "Usuario Incorrecto",
            error: true
        })
    }else{
        // verificar o comparar la contraseña del cliente con la contraseña de la bd
        const valor = await bcrypt.compare(datos.password, user.password);
        if(valor){
            // usuario correcto
            // json Web Token
            const payload = {
                email: user.email,
                id: user._id,
                time: new Date()
            }
            let token = jwt.sign(payload, "MI_CODIGO_SECRETO", {
                expiresIn: "1h"
            })
            
            res.json({
                access_token: token,
                usuario: {
                    id: user._id,
                    email: user.email,
                    username: user.username
                },
                error: false
            })

        }else{
            // usuario incorrecto
            res.json({
                mensaje: "Contraseña Incorrecto",
                error: true
            })
        }


    }

}