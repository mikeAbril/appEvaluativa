import {
    obtenerUsuarios,
    obtenerUsuarioPorId
}from '../models/usuariosModel';






export async function getUsuarios(req, res) {
    try {
    const usuarios = await obtenerUsuarios();
    res.json(usuarios);
    console.log("corriendo por ahora");
    } catch (error) {
    res.status(500).json({error: 'Error al obtener usuarios'})
    }
}

export async function getUsuario(params) {
    
}

export async function postUsuario(params) {
    
}

export async function putUsuario(params) {
    
}

export async function patchEstadoUsuario(params) {
    
}

export async function deleteUsuario(params) {
    
}