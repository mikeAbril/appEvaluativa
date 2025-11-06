import pool from "../config/mysql";

export async function obtenerUsuarios() {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    return rows;
}

export async function obtenerUsuarioPorId(id){
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id =?,'[id]);
    return rows[0];
}