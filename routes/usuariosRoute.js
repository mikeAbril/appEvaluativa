import { Router } from "express";
import{
    getUsuarios,
    getUsuario,
    postUsuario,
    putUsuario,
    patchEstadoUsuario,
    deleteUsuario
} from '../controllers/usuariosController.js';

const router = Router();

router.get('/', getUsuarios);
