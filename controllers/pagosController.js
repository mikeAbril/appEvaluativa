import {
  obtenerPagos,
  obtenerPagoPorId,
  crearPago,
  actualizarPago,
} from "../models/pagosModel.js";

export async function getPagos(req, res) {
  try {
    const pagos = await obtenerPagos();
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los pagos" });
  }
}

export async function getPago(req, res) {
  try {
    const pago = await obtenerPagoPorId(req.params.usuario_id);

    if (!pago) {
      return res.status(404).json({
        error: "No se encontró ningún pago para este usuario",
      });
    }

    res.json(pago);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el pago" });
  }
}

export async function postPago(req, res) {
  try {
    const { usuario_id, monto, metodo } = req.body;

    const nuevoPago = await crearPago(usuario_id, monto, metodo);

    res.status(201).json(nuevoPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el nuevo pago" });
  }
}

export async function putPago(req, res) {
  try {
    const { id } = req.params;
    const datos = req.body;

    const pagoActualizado = await actualizarPago(id, datos);

    if (!pagoActualizado) {
      return res.status(404).json({ error: "Pago no encontrado" });
    }

    res.json(pagoActualizado);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el pago" });
  }
}

export async function getPagoEstado(req, res) {
  try {
    const pago = await obtenerPagoPorId(req.params.usuario_id);

    if (!pago) {
      return res.json({
        estado: "inactivo",
        mensaje: "No tiene pagos registrados",
      });
    }

    const hoy = new Date();
    const venc = new Date(pago.fecha_vencimiento);

    const estado = venc >= hoy ? "activo" : "inactivo";

    res.json({
      usuario_id: req.params.usuario_id,
      fecha_vencimiento: pago.fecha_vencimiento,
      estado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el estado del usuario" });
  }
}
