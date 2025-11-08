import pool from "../config/mysql"

export async function obtenerPago() {
    const [rows] = await pool.query ('SELECT * FROM pagos')
    return rows;
}

export async function obtenerPagosPorId() {
    const [rows]  = await pool.query ('SELECT * FROM  pagos WHERE id = ?', [id]);
    return rows[0]
}

export async function crearPago({usuario_id, monto, metodo }) {
    const [pago] = await pool.query('INSERT INTO pagos(usuario_id, monto, metodo) VALUES (?,?,?)',
        [usuario_id, monto, metodo]
    );
    return{id: pago.insertId ,usuario_id, monto, metodo };
    
}

export async function actualizarPago(usuario_id, { monto, metodo }) {
  await pool.query('UPDATE pagos SET usuario_id = ?, monto = ? , metodo  = ? WHERE id = ?', [nombre, precio, id]);
  return { usuario_id, monto, metodo };
}