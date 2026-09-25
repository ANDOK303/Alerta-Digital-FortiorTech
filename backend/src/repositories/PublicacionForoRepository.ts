import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { pool } from '../config/database';
import { PublicacionForo } from '../models/Publicacion-foro';

export class PublicacionForoRepository {
  async obtenerTodas(): Promise<PublicacionForo[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM publicaciones_foro');
    return rows as PublicacionForo[];
  }

  async obtenerPorId(id: number): Promise<PublicacionForo | null> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM publicaciones_foro WHERE id_publicacion = ?', [id]);
    return rows.length > 0 ? (rows[0] as PublicacionForo) : null;
  }

  async crear(pub: PublicacionForo): Promise<number> {
    const sql = `
      INSERT INTO publicaciones_foro (id_hilo, id_usuario, alias_anonimo, mensaje, url_imagen_adjunta)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query<ResultSetHeader>(sql, [
      pub.id_hilo,
      pub.id_usuario || null,
      pub.alias_anonimo || 'Anónimo',
      pub.mensaje,
      pub.url_imagen_adjunta || null
    ]);
    return result.insertId;
  }

  async actualizar(id: number, pub: Partial<PublicacionForo>): Promise<boolean> {
    const sql = `
      UPDATE publicaciones_foro 
      SET id_hilo = ?, id_usuario = ?, alias_anonimo = ?, mensaje = ?, url_imagen_adjunta = ?
      WHERE id_publicacion = ?
    `;
    const [result] = await pool.query<ResultSetHeader>(sql, [
      pub.id_hilo,
      pub.id_usuario || null,
      pub.alias_anonimo || 'Anónimo',
      pub.mensaje,
      pub.url_imagen_adjunta || null,
      id
    ]);
    return result.affectedRows > 0;
  }

  async eliminar(id: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>('DELETE FROM publicaciones_foro WHERE id_publicacion = ?', [id]);
    return result.affectedRows > 0;
  }
}