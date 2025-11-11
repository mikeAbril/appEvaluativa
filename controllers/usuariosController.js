import {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
} from '../models/usuariosModel.js';

export async function getUsuarios(req, res) {
  try {
    const usuarios = await obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
}

export async function getUsuario(req, res) {
  try {
    const usuario = await obtenerUsuarioPorId(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario' });
  }
}

export async function postUsuario(req, res) {
  try {
    const { nombre, email, fecha_nacimiento } = req.body;
    const nuevo = await crearUsuario(nombre, email, fecha_nacimiento);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
}

export async function putUsuario(req, res) {
  try {
    const usuario = await obtenerUsuarioPorId(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const actualizar = await actualizarUsuario(req.params.id, req.body);
    res.json(actualizar);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
}


export async function patchEstadoUsuario(req, res) {
  try {
    const { estado } = req.body;
    const usuario = await obtenerUsuarioPorId(req.params.id);

    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    await actualizarUsuario(req.params.id, { estado });

    res.json({ id: req.params.id, estado });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar estado del usuario' });
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
