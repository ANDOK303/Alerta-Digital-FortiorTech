import { Request, Response } from 'express';
import { pool } from '../config/database';
import { RowDataPacket } from 'mysql2';
import fs from 'fs';
import path from 'path';

export const subirFoto = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!req.file) {
        return res.status(400).json({ exito: false, mensaje: 'No se envió ninguna imagen' });
    }

    try {
        const [rows] = await pool.query<RowDataPacket[]>(
            'SELECT foto_perfil FROM usuarios WHERE id_usuario = ?',
            [id]
        );

        const fotoAnterior = rows[0]?.foto_perfil;
        const rutaFoto = `/uploads/${req.file.filename}`;

        if (fotoAnterior && fotoAnterior !== rutaFoto) {
            const rutaAnterior = path.join(__dirname, '../../public', fotoAnterior);
            if (fs.existsSync(rutaAnterior)) {
                fs.unlinkSync(rutaAnterior);
            }
        }

        await pool.query('UPDATE usuarios SET foto_perfil = ? WHERE id_usuario = ?', [rutaFoto, id]);
        res.status(200).json({ exito: true, foto_perfil: rutaFoto });
    } catch (error) {
        res.status(500).json({ exito: false, mensaje: 'Error al guardar la foto' });
    }
};