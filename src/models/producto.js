import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    precio: {
        type: Number
    },
    stock: {
        type: Number
    },
    imagen: {
        type:String
    },
    descripcion: {
        type: String,
        trim: true
    }   
});

export const Producto = model("productos", productoSchema);
