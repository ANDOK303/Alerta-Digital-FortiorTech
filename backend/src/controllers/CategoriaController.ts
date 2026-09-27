import { Request, Response } from 'express';
import { pool } from '../config/database';
import { RowDataPacket } from 'mysql2';

export class CategoriaController {
  async obtenerTodas(req: Request, res: Response) {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM categorias_recomendacion');
    res.json(rows);
  }

  async crear(req: Request, res: Response) {
    const { nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa } = req.body;

    const [result] = await pool.query(
      'INSERT INTO categorias_recomendacion (nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa) VALUES (?, ?, ?, ?, ?)',
      [nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa ?? true]
    );

    const insertId = (result as any).insertId;
    res.status(201).json({ id_categoria: insertId, ...req.body });
  }
}