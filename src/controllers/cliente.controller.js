import { Cliente } from "./../models/cliente"

export const listar = async function(req, res){
    try{
        const lista_clientes = await Cliente.find()
        // res.json(list_productos);
        res.status(200).send(lista_clientes)
    }catch(error){
        res.status(500).send({
            error: error,
            mensaje: "error al obtener los clientes"
        })
    }    
}

export const guardar = async function(req, res){
    
    // guardar los datos
    try{
        let clie = new Cliente(req.body);
        await clie.save();

        res.status(201).send({
            mensaje: "CLiente registrado"
        })
    }catch(error){
        res.status(500).send({
            mensaje: "error al guardar el pedido"
        })
    }
}

export const mostrar = async function(req, res){
    try{
        let id = req.params.id;
        const clie = await Pedido.findOne({ci_nit: id})
        if(clie){
            res.json(clie);
        }else{
            res.status(404).send({
                mensaje: "el Cliente buscado no existe"
            })
        }
    }catch(error){
        res.status(500).send({
            mensaje: "error al buscar el producto"
        })
    }
}