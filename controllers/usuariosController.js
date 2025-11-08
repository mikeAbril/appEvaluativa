import {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    elimarUsuario
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

export async function getUsuario(req, res) {
    try {
        const usuario = await obtenerUsuarioPorId(req.params.id);
        if (!usuario) {res.status(404).json({error: 'usaurio no encontrado'})}
        res.json(usuario)
    } catch (error) {
        res.status(500).json({error: 'error al obtener usuario'})
        }
    }

export async function postUsuario(req, res) {
    try {
        
    } catch (error) {
        
    }
}

export async function putUsuario(params) {
    
}

export async function patchEstadoUsuario(params) {
    
}

export async function deleteUsuario(params) {
    
}