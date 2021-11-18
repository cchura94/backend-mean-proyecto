import { Router } from "express"
// import { listar, guardar } from "./../controllers/usuario.controller"
import * as usuarioController from "./../controllers/usuario.controller";

export const router = Router()

// rutas
router.get("/", function(req, res){
    res.send("Api de Node.js")  
})

// rutas para usuario
router.get("/usuario", usuarioController.listar);
router.post("/usuario", usuarioController.guardar);