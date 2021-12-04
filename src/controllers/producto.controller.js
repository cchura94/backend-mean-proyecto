import { Producto } from "./../models/producto"

export const listar = async function(req, res){
    try{
        const list_productos = await Producto.find()
        // res.json(list_productos);
        res.status(200).send(list_productos)
    }catch(error){
        res.status(500).send({
            error: error,
            mensaje: "error al obtener los productos"
        })
    }    
}

export const guardar = async function(req, res){
    // subir la imagen
    if(req.file){
        req.body.imagen = req.file.filename
    }
    // guardar los datos
    try{
        console.log(req.body)
        let prod = new Producto(req.body);
        await prod.save();

        res.status(201).send({
            mensaje: "Producto registrado"
        })
    }catch(error){
        res.status(500).send({
            mensaje: "error al guardar el producto"
        })
    }
}

export const mostrar = async function(req, res){
    try{
        let id = req.params.id;
        const prod = await Producto.findById(id)
        if(prod){
            res.json(prod);
        }else{
            res.status(404).send({
                mensaje: "el Producto buscado no existe"
            })
        }
    }catch(error){
        res.status(500).send({
            mensaje: "error al buscar el producto"
        })
    }
}

export const modificar = async function(req, res){

     // subir la imagen
    if(req.file){
        req.body.imagen = req.file.filename
    }
    try{
        let id = req.params.id;
        const prod = await Producto.findById(id);
        if(prod){
            // modificar
            await Producto.findByIdAndUpdate(prod._id, req.body)
            res.json({
                mensaje: "producto modificado"
            });
        }else{
            res.status(404).send({
                mensaje: "el Producto buscado no existe"
            })
        }

    }catch(error){
        res.status(500).send({
            mensaje: "error al modificar el producto"
        })
    }
}

export const eliminar = async function(req, res){
    try{
        let id = req.params.id;
        await Producto.remove({
            _id: id
        })
        res.json({
            mensaje: "producto eliminado"
        });
    }catch(error){
        res.status(500).send({
            mensaje: "error al eliminar el producto"
        })
    }
}