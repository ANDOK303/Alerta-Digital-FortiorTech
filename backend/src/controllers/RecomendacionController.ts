import { Request, Response } from 'express';
import { pool } from '../config/database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export class RecomendacionController {
  
  obtenerTodas = async (req: Request, res: Response) => {
    try {
      const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM recomendaciones');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener recomendaciones' });
    }
  };

  obtenerPorId = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const [rows] = await pool.query<RowDataPacket[]>(
        'SELECT * FROM recomendaciones WHERE id_recomendacion = ?', 
        [id]
      );

      if (rows.length === 0) {
        return res.status(404).json({ mensaje: 'Recomendación no encontrada' });
      }
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la recomendación' });
    }
  };

  crear = async (req: Request, res: Response) => {
    try {
      const { id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado } = req.body;

      const [result] = await pool.query<ResultSetHeader>(
        'INSERT INTO recomendaciones (id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado) VALUES (?, ?, ?, ?, ?, ?)',
        [id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado ?? false]
      );

      res.status(201).json({ id_recomendacion: result.insertId, ...req.body });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la recomendación' });
    }
  };

  actualizar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado } = req.body;

      const [result] = await pool.query<ResultSetHeader>(
        'UPDATE recomendaciones SET id_categoria = ?, id_autor = ?, titulo = ?, contenido_pasos = ?, plataforma_objetivo = ?, es_destacado = ? WHERE id_recomendacion = ?',
        [id_categoria, id_autor, titulo, contenido_pasos, plataforma_objetivo, es_destacado ?? false, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Recomendación no encontrada para actualizar' });
      }

      res.json({ mensaje: 'Recomendación actualizada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la recomendación' });
    }
  };

  eliminar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      
      const [result] = await pool.query<ResultSetHeader>(
        'DELETE FROM recomendaciones WHERE id_recomendacion = ?', 
        [id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Recomendación no encontrada para eliminar' });
      }

      res.json({ mensaje: 'Recomendación eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la recomendación' });
    }
  };
}