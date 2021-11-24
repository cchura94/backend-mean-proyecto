import { Schema, model } from "mongoose";

const pedidoSchema = new Schema({
    fecha_pedido: {
        type: Date,
        default: Date.now
    },
    monto_total: {
        type: Number,
        default: 0
    },
    cliente: {
        type: Schema.ObjectId,
        ref: 'clientes'
    },
    carrito: [
        {
            producto: {
                type: Schema.ObjectId,
                ref: 'productos'
            },
            cantidad: Number
        }
    ]

});

export const Pedido = model("pedidos", pedidoSchema);
