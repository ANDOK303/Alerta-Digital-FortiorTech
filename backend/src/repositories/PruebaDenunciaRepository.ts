import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '../config/database';
import { PruebaDenuncia } from '../models/Prueba-denuncia';

export class PruebaDenunciaRepository {
  async obtenerTodas(): Promise<PruebaDenuncia[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM pruebas_denuncia');
    return rows as PruebaDenuncia[];
  }

  async obtenerPorId(id: number): Promise<PruebaDenuncia | null> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM pruebas_denuncia WHERE id_prueba = ?', [id]);
    return rows.length > 0 ? (rows[0] as PruebaDenuncia) : null;
  }

  async crear(prueba: PruebaDenuncia): Promise<number> {
    const sql = `
      INSERT INTO pruebas_denuncia (id_denuncia, url_archivo, tipo_archivo, tamano_bytes, descripcion_evidencia)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query<ResultSetHeader>(sql, [
      prueba.id_denuncia,
      prueba.url_archivo,
      prueba.tipo_archivo,
      prueba.tamano_bytes,
      prueba.descripcion_evidencia || null
    ]);
    return result.insertId;
  }

  async actualizar(id: number, prueba: Partial<PruebaDenuncia>): Promise<boolean> {
    const sql = `
      UPDATE pruebas_denuncia 
      SET id_denuncia = ?, url_archivo = ?, tipo_archivo = ?, tamano_bytes = ?, descripcion_evidencia = ?
      WHERE id_prueba = ?
    `;
    const [result] = await pool.query<ResultSetHeader>(sql, [
      prueba.id_denuncia,
      prueba.url_archivo,
      prueba.tipo_archivo,
      prueba.tamano_bytes,
      prueba.descripcion_evidencia || null,
      id
    ]);
    return result.affectedRows > 0;
  }

  async eliminar(id: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>('DELETE FROM pruebas_denuncia WHERE id_prueba = ?', [id]);
    return result.affectedRows > 0;
  }
}