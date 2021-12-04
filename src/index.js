// modulos del core de Nodejs
// modulos de terceros (npm)
import express from "express";
import cors from "cors"
// modulos locales
import db from "./config/db"
import { router } from "./routes"
// declarar variables auxiliares
const PORT = process.env.PORT || 3000
const HOST = "127.0.0.1"

// express
const app = express()
app.set("puerto", PORT)

// Habilitando cors
app.use(cors())

// carga de archivos estaticos
app.use(express.static('public'))

// Habilitar peticiones en formato json
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// habilitando rutas
app.use("/api", router);

//levantar el servidor
app.listen(app.get("puerto"), () => {
    console.log(`servidor corriendo en http://${HOST}:${app.get('puerto')}`)
})