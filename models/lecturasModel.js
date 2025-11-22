import pool from "../config/mysql.js"


export async function crearLecturaPrincipal(usuario_id) {
    const [rows] = await pool.query(
        'INSER INTO lecturas(usuario_id, tipo, contenido, fecha) VALUES (?, PRINCIPAL,?,?'
        [usuario_id, contenido, fecha]
    )
    return rows[0];
}
export async function crearLecturaDiaria(){
     const [rows] = await pool.query(
        'INSER INTO lecturas(usuario_id, tipo, contenido, fecha) VALUES (?, DIARIA,?,?'
        [usuario_id, contenido, fecha]
    )
    return rows[0];
}
export async function obtenerLecturaPorId(req,res){
  const [rows] = await pool.query('SELECT * FROM lecturas WHERE id = ?', [id]);
  return rows[0];
}
export async function ObtenerLecturasUsuario(req,res){
  const [rows] = await pool.query('SELECT * FROM lecturas WHERE usuario_id = ?',[usuario_id]);
  return rows[0];
}