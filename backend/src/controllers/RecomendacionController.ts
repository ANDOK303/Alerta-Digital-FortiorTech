import { Request, Response } from 'express';
import { pool } from '../config/database';
import { RowDataPacket } from 'mysql2';

export class RecomendacionController {
  async obtenerTodas(req: Request, res: Response) {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM recomendaciones');
    res.json(rows);
  }

  async crear(req: Request, res: Response) {
    const { id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado } = req.body;

    const [result] = await pool.query(
      'INSERT INTO recomendaciones (id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado) VALUES (?, ?, ?, ?, ?, ?)',
      [id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado ?? false]
    );

    const insertId = (result as any).insertId;
    res.status(201).json({ id_recomendacion: insertId, ...req.body });
  }
}