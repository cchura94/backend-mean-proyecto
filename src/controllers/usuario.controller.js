import { Usuario } from "./../models/usuario"

export const listar = async function(req, res){
    let usuarios = await Usuario.find();
    res.send(usuarios);
}

export const guardar = function(req, res){
    let u = new Usuario({
        username: "cristian",
        email: "cristian@gmail.com",
        password: "cristian123"
    });

    u.save();
    res.send("Usuario Registrado");
}