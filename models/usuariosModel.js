import pool from "../config/mysql";

export async function obtenerUsuarios() {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    return rows;
}

export async function obtenerUsuarioPorId(id){
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id =?,'[id]);
    return rows[0];
}

export async function crearUsuario(nombre, email, fecha_nacimiento){
    const [result] = await pool.query(
    'INSERT INTO usuarios (nombre, email, fecha_nacimiento) VALUES (?, ?, ?)',[nombre, email, fecha_nacimiento]);
    return { id: result.insertId, nombre, email };
}

export async function actualizarUsuario(id,{nombre, email}){
    await pool.query('UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?', [nombre, email, id]);
    return { id, nombre, email };
}

export async function elimarUsuario(id){
    await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    return { mensaje: 'Usuario eliminado' };
}