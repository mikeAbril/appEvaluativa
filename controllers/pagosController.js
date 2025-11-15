import {
    obtenerPagos,
    obtenerPagoPorId,
    crearPago,
    actualizarPago
} from '../models/pagosModel.js';

export async function getPagos(req, res) {
    const pagos = await obtenerPagos()
    res.json(pagos)
}

export async function getPago(req, res) {
    try {
    const pago = await obtenerPagoPorId(req.params.id);
    if(!pago) return res.status(404).json({error: 'Pago no encontrado, verifica si existe'});
    res.json(pago);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener pago' });
    }
    
}

export async function postPago(req, res) {
  try {
    const { usuario_id, monto, metodo } = req.body;

    const nuevoPago = await crearPago(usuario_id, monto, metodo);

    res.status(201).json(nuevoPago);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear un Nuevo Pago" });
  }
}



export async function getPagoEstado(req, res) {
    const pagoActualizado = await actualizarPago(req.params.id, req.body);
    res.json(pagoActualizado)
    
}