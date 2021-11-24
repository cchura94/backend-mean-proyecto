import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
    nombre_completo: {
        type: String,
        trim: true
    },
    ci_nit: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    }
})

export const Cliente = model("clientes", clienteSchema);