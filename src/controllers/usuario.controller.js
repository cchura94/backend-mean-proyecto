import { Usuario } from "./../models/usuario"
import bcrypt from "bcrypt"

export const listar = async function(req, res){
    let usuarios = await Usuario.find();
    res.send(usuarios);
}

export const guardar = async function(req, res){
    let datos = req.body
    // buscar el email si ya está en registrado
    const user = await Usuario.findOne({
        email: datos.email
    });
    if(user){
        res.json({
                    mensaje: "El correo ya está en uso",
                    error: true
                })
    }else{
        // BCRYPT (cifrar contraseñas)
        let saltRounds = 12;
        const pass = await bcrypt.hash(datos.password, saltRounds);

        let u = new Usuario({
            username: datos.username,
            email: datos.email,
            password: pass
        });
        let nuevo_usuario = await u.save();
        console.log(nuevo_usuario)

        res.json({
            mensaje: "Usuario registrado",
            user: nuevo_usuario,
            error: false
        })       
    }
}

export const mostrar = function(req, res){
    let id = req.params.id
}

export const modificar = function(req, res){

}

export const eliminar = function(req, res){

}