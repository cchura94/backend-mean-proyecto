import { Router } from "express"
// import { listar, guardar } from "./../controllers/usuario.controller"
import * as usuarioController from "./../controllers/usuario.controller";
import * as authController from "./../controllers/auth.controller"
import * as productoController from "./../controllers/producto.controller"
import * as pedidoController from "./../controllers/pedido.controller"
import * as clienteController from "./../controllers/cliente.controller"

import { verificaAuth } from "../middlewares/auth.middleware";
// para imagenes
import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/imagenes')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

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
router.post("/producto", verificaAuth, upload.single('imagen'), productoController.guardar);
router.get("/producto/:id", verificaAuth, productoController.mostrar);
router.put("/producto/:id", verificaAuth, upload.single('imagen'), productoController.modificar);
router.delete("/producto/:id", verificaAuth, productoController.eliminar);

// Pedidos
router.get("/pedido", verificaAuth, pedidoController.listar);
router.post("/pedido", verificaAuth, pedidoController.guardar);

// rutas clientes
router.get("/cliente", verificaAuth, clienteController.listar);
router.post("/cliente", verificaAuth, clienteController.guardar);
