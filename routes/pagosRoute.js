import { Router } from "express";
import {
    getPagos,
    getPago,
    postPago,
    getPagoEstado
} from '../controllers/pagosController.js'


const router = Router();

router.get('/estado/:usuario_id', getPagoEstado);
router.get('/:usuario_id', getPago);
router.get('/', getPagos);
router.post('/', validarCreacionPago, postPago);


export default router;