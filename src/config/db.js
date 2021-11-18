import mongoose from "mongoose"


mongoose
    .connect('mongodb://localhost:27017/proyecto')
    .then(db => {
        console.log("MONGODB CONECTADO")
    })
    .catch(error => {
        console.log("ERROR DE CONEXION CON MONGODB: ", error);
    })
