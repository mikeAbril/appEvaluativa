import pool from "../config/mysql.js"

export async function obtenerPagos() {
    const [rows] = await pool.query ('SELECT * FROM pagos')
    return rows;
}

export async function obtenerPagoPorId(id) {
  const [rows] = await pool.query('SELECT * FROM pagos WHERE id = ?', [id]);
  return rows[0];
}


export async function crearPago(id, { usuario_id, monto, metodo }) {
  await pool.query('UPDATE pagos SET usuario_id = ?, monto = ?, metodo = ? WHERE id = ?', 
                   [usuario_id, monto, metodo, id]);
  return { id, usuario_id, monto, metodo };
}


export async function actualizarPago(usuario_id, { monto, metodo }) {
  await pool.query('UPDATE pagos SET usuario_id = ?, monto = ? , metodo  = ? WHERE id = ?', [usuario_id, monto, metodo,id]);
  return {id, usuario_id, monto, metodo };
}