import pool from "../config/mysql.js"

export async function obtenerPagos() {
    const [rows] = await pool.query ('SELECT * FROM pagos')
    return rows;
}

export async function obtenerPagoPorId(id) {
  const [rows] = await pool.query('SELECT * FROM pagos WHERE usuario_id = ?', [id]);
  return rows[0];
}


export async function crearPago(usuario_id, monto, metodo ) {
  const [result] = await pool.query(
    `INSERT INTO pagos(usuario_id, monto, fecha_pago, fecha_vencimiento, metodo)
     VALUES(?, ?, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 30 DAY), ?)`,
    [usuario_id, monto, metodo]
  );
  
  return {
    id: result.insertId,
    usuario_id,
    monto,
    metodo,
    fechaPago: new Date()
  };
}



export async function actualizarPago(id, { monto, metodo }) {
  await pool.query('UPDATE pagos SET usuario_id = ?, monto = ? , metodo  = ? WHERE id = ?', [usuario_id, monto, metodo,id]);
  return {id, usuario_id, monto, metodo };
}