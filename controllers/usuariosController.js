import {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
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
        const nuevo = await crearUsuario(req.body);
        res.status(201).json(nuevo)
    } catch (error) {
        res.status(500).json({error: 'error al crear usuario'})
    }
}

export async function putUsuario(req, res) {
    try {
        const usuario = await obtenerUsuarioPorId(req.params.id)
        if (!usuario) {
            res.status(404).json({error: 'usuario no encontrado'})
        }
        const actualizar = await actualizarUsuario(req.params.id, req.body)
        res.json(actualizar)
    } catch (error) {
        res.status(500).json({error: 'usuario no encontrado para actualizarlo'})
    }
}

export async function patchEstadoUsuario(req, res) {
    try {
        const usuario = await obtenerUsuarioPorId(req.params.id)
        if (!usuario) {
            res.status(404).json({error: 'usaurio no encontrado'})
        }
        const estado = await obtenerUsuarioPorId(req.params.id, req.params.estado)
        res.json(estado)
    } catch (error) {
        res.status(500).json({error: 'error en la busqueda del usuario'})
    }
}

export async function deleteUsuario(req, res) {
  try {
    const usuario = await obtenerUsuarioPorId(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const resultado = await eliminarUsuario(req.params.id);
    res.json(resultado);
  } catch (error) { 
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
}