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
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.patch('/:id', patchEstadoUsuario)
router.delete('/:id', deleteUsuario);

export default router;
