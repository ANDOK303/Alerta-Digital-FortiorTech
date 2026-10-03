import { Router } from 'express';
import { pool } from '../config/database';

const router = Router();

// CRUD Usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios' });
  }
});

router.post('/usuarios', async (req, res) => {
  const { nombre, correo_electronico, contrasena, rol } = req.body;
  try {
    await pool.query('INSERT INTO usuarios (nombre, correo_electronico, contrasena, rol) VALUES (?, ?, ?, ?)', [nombre, correo_electronico, contrasena, rol]);
    res.json({ mensaje: 'Usuario creado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear usuario' });
  }
});

router.put('/usuarios/:id', async (req, res) => {
  const { nombre, correo_electronico, rol } = req.body;
  try {
    await pool.query('UPDATE usuarios SET nombre = ?, correo_electronico = ?, rol = ? WHERE id = ?', [nombre, correo_electronico, rol, req.params.id]);
    res.json({ mensaje: 'Usuario actualizado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar usuario' });
  }
});

router.delete('/usuarios/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM usuarios WHERE id = ?', [req.params.id]);
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar usuario' });
  }
});

// GET Denuncias (Ejemplo rápido)
router.get('/denuncias', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM denuncias');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener denuncias' });
  }
});

export default router;