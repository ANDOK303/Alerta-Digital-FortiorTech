import { Request, Response } from 'express';
import { pool } from '../config/database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export class CategoriaController {
  
  obtenerTodas = async (req: Request, res: Response) => {
    try {
      const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM categorias_recomendacion');
      res.status(200).json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las categorías' });
    }
  };

  obtenerPorId = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const [rows] = await pool.query<RowDataPacket[]>(
        'SELECT * FROM categorias_recomendacion WHERE id_categoria = ?',
        [id]
      );

      if (rows.length === 0) {
        return res.status(404).json({ mensaje: 'Categoría no encontrada' });
      }
      res.status(200).json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la categoría' });
    }
  };

  crear = async (req: Request, res: Response) => {
    try {
      const { nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa } = req.body;

      const [result] = await pool.query<ResultSetHeader>(
        'INSERT INTO categorias_recomendacion (nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa) VALUES (?, ?, ?, ?, ?)',
        [nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa ?? true]
      );

      res.status(201).json({ id_categoria: result.insertId, ...req.body });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear la categoría' });
    }
  };

  actualizar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa } = req.body;

      const [result] = await pool.query<ResultSetHeader>(
        'UPDATE categorias_recomendacion SET nombre_categoria = ?, descripcion = ?, icono_css = ?, nivel_dificultad = ?, es_activa = ? WHERE id_categoria = ?',
        [nombre_categoria, descripcion, icono_css, nivel_dificultad, es_activa ?? true, id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Categoría no encontrada para actualizar' });
      }

      res.status(200).json({ mensaje: 'Categoría actualizada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
  };

  eliminar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      
      const [result] = await pool.query<ResultSetHeader>(
        'DELETE FROM categorias_recomendacion WHERE id_categoria = ?', 
        [id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({ mensaje: 'Categoría no encontrada para eliminar' });
      }

      res.status(200).json({ mensaje: 'Categoría eliminada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
  };
}