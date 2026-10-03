import { pool } from '../config/database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export class DenunciaRepository {
  async obtenerTodas(): Promise<any[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT id_denuncia, titulo_caso, descripcion_detallada, tipo_ciberacoso, nivel_prioridad, estado_resolucion FROM denuncias ORDER BY id_denuncia DESC'
    );
    return rows;
  }

  async crear(denuncia: any): Promise<number> {
    const sql = `
      INSERT INTO denuncias (titulo_caso, descripcion_detallada, tipo_ciberacoso, nivel_prioridad, estado_resolucion)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query<ResultSetHeader>(sql, [
      denuncia.titulo_caso,
      denuncia.descripcion_detallada,
      denuncia.tipo_ciberacoso,
      denuncia.nivel_prioridad || 'Alta',
      denuncia.estado_resolucion || 'Pendiente'
    ]);
    return result.insertId;
  }

  async actualizar(id: number, denuncia: any): Promise<boolean> {
    const sql = `
      UPDATE denuncias 
      SET titulo_caso = ?, descripcion_detallada = ?, tipo_ciberacoso = ?, nivel_prioridad = ?, estado_resolucion = ?
      WHERE id_denuncia = ?
    `;
    const [result] = await pool.query<ResultSetHeader>(sql, [
      denuncia.titulo_caso,
      denuncia.descripcion_detallada,
      denuncia.tipo_ciberacoso,
      denuncia.nivel_prioridad,
      denuncia.estado_resolucion,
      id
    ]);
    return result.affectedRows > 0;
  }

  async eliminar(id: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      'DELETE FROM denuncias WHERE id_denuncia = ?',
      [id]
    );
    return result.affectedRows > 0;
  }
}