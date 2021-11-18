import { Schema, model } from "mongoose"

const UsuarioSchema = new Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: String,
    estado: {
        type: Boolean,
        default: true
    }
});

export const Usuario = model('usuarios', UsuarioSchema)