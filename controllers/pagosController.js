import {
    obtenerPagos,
    obtenerPagoPorId,
    crearPago,
    actualizarPago
} from '../models/pagosModel.js';
<<<<<<< HEAD

export async function getPagos(req, res) {
    const pagos = await obtenerPagos()
    res.json(pagos)
}
=======
 
>>>>>>> 531bd6329f7d5c67b1f3929df90dbb68937535d3

export async function getPago(req, res) {
    const pago = await obtenerPagoPorId(req.params.id);
    if(!pago) return res.status(404).json({error: 'Pago no encontrado'});
    res.json(pago);
}

export async function postPago(req, res) {
    const nuevo = await crearPago(req.body);
    res.status(201).json(nuevo);
}

export async function getPagoEstado(req, res) {
    const pagoActualizado = await actualizarPago(req.params.id, req.body);
    res.json(pagoActualizado)
    
}