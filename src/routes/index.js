import { Router } from "express"
// import { listar, guardar } from "./../controllers/usuario.controller"
import * as usuarioController from "./../controllers/usuario.controller";
import * as authController from "./../controllers/auth.controller"
import * as productoController from "./../controllers/producto.controller"
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

// Producto
router.get("/producto", verificaAuth, productoController.listar);
router.post("/producto", verificaAuth, productoController.guardar);
router.get("/producto/:id", verificaAuth, productoController.mostrar);
router.put("/producto/:id", verificaAuth, productoController.modificar);
router.delete("/producto/:id", verificaAuth, productoController.eliminar);