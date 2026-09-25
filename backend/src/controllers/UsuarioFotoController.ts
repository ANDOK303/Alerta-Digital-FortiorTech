import { Request, Response } from 'express';
import { pool } from '../config/database';

export const subirFoto = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!req.file) {
        return res.status(400).json({ exito: false, mensaje: 'No se envió ninguna imagen' });
    }

    const rutaFoto = `/uploads/${req.file.filename}`;

    try {
        await pool.query('UPDATE usuarios SET foto_perfil = ? WHERE id_usuario = ?', [rutaFoto, id]);
        res.status(200).json({ exito: true, foto_perfil: rutaFoto });
    } catch (error) {
        res.status(500).json({ exito: false, mensaje: 'Error al guardar la foto' });
    }
};