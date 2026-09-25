import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '../config/database';
import { CalificacionPlataforma } from '../models/Calificacion-plataforma';

export class CalificacionPlataformaRepository {
  async obtenerTodas(): Promise<CalificacionPlataforma[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM calificaciones_plataforma');
    return rows as CalificacionPlataforma[];
  }

  async obtenerPorId(id: number): Promise<CalificacionPlataforma | null> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM calificaciones_plataforma WHERE id_calificacion = ?', [id]);
    return rows.length > 0 ? (rows[0] as CalificacionPlataforma) : null;
  }

  async crear(cal: CalificacionPlataforma): Promise<number> {
    const sql = `
      INSERT INTO calificaciones_plataforma (id_usuario, puntuacion, tipo_evaluacion, comentario, se_recomienda_sitio)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query<ResultSetHeader>(sql, [
      cal.id_usuario,
      cal.puntuacion,
      cal.tipo_evaluacion || 'General',
      cal.comentario || null,
      cal.se_recomienda_sitio ?? true
    ]);
    return result.insertId;
  }

  async actualizar(id: number, cal: Partial<CalificacionPlataforma>): Promise<boolean> {
    const sql = `
      UPDATE calificaciones_plataforma 
      SET id_usuario = ?, puntuacion = ?, tipo_evaluacion = ?, comentario = ?, se_recomienda_sitio = ?
      WHERE id_calificacion = ?
    `;
    const [result] = await pool.query<ResultSetHeader>(sql, [
      cal.id_usuario,
      cal.puntuacion,
      cal.tipo_evaluacion || 'General',
      cal.comentario || null,
      cal.se_recomienda_sitio ?? true,
      id
    ]);
    return result.affectedRows > 0;
  }

  async eliminar(id: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>('DELETE FROM calificaciones_plataforma WHERE id_calificacion = ?', [id]);
    return result.affectedRows > 0;
  }
}