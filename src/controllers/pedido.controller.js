import { Pedido } from "./../models/pedido"

export const listar = async function(req, res){
    try{
        const list_pedidos = await Pedido.find().populate('cliente').populate({
            path: "carrito.producto",
            model: "productos"
        })
        // res.json(list_productos);
        res.status(200).send(list_pedidos)
    }catch(error){
        res.status(500).send({
            error: error,
            mensaje: "error al obtener los pedidos"
        })
    }    
}

export const guardar = async function(req, res){
    
    // guardar los datos
    try{
        let ped = new Pedido(req.body);
        await ped.save();

        res.status(201).send({
            mensaje: "Pedido registrado"
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
        const ped = await Pedido.findById(id)
        if(ped){
            res.json(ped);
        }else{
            res.status(404).send({
                mensaje: "el Pedido buscado no existe"
            })
        }
    }catch(error){
        res.status(500).send({
            mensaje: "error al buscar el producto"
        })
    }
}