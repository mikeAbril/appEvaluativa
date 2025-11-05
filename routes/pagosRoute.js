import { Router } from "express";
import{
    getPagos,
    getPago,
    postPago,
    getPagoEstado
} from '../controllers/pagosController.js'


const router = Router();

    router.get('/',getPagos);
    router.get('/:usuario_id',getPago);
    router.post('/', postPago);
    router.get('/estado/:usuario_id', getPagoEstado)

export default router;