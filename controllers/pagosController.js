import {
    obtenerPago,
    obtenerPagoPorId,
    crearPago,
    actualizarPago
} from '../models/pagosModel.js';

export async function getPagos(res, req) {
    const pagos = await obtenerPago()
    res.json(pagos)
}

export async function getPago(res, req) {
    const pago = await obtenerPagoPorId(req.params.id);
    if(!pago) return res.status(404).json({error: 'Pago no encontrado'});
    res.json(pago);
}

export async function postPago(res, req) {
    const nuevo = await crearPago(req.body);
    res.status(201).json(nuevo);
}

export async function getPagoEstado(req, res) {
    const pagoActualizado = await actualizarPago(req.params.id, req.body);
    res.json(pagoActualizado)
    
}