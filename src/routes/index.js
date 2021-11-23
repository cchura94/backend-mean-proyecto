import { Router } from "express"
// import { listar, guardar } from "./../controllers/usuario.controller"
import * as usuarioController from "./../controllers/usuario.controller";
import * as authController from "./../controllers/auth.controller"
import { verificaAuth } from "../middlewares/auth.middleware";

export const router = Router()

// rutas
router.get("/", function(req, res){
    res.send("Api de Node.js")  
})

// rutas para usuario
router.get("/usuario", verificaAuth, usuarioController.listar);
router.post("/usuario", verificaAuth, usuarioController.guardar);

// rutas para auth (/api/auth/login)
router.post("/auth/login", authController.login);