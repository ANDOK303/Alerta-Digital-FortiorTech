import { pool } from '../config/database';
import { Usuario } from '../models/Usuario';
import { RowDataPacket } from 'mysql2';

export class UsuarioRepository {
  async buscarPorCorreo(correo: string): Promise<Usuario | undefined> {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM usuarios WHERE correo_electronico = ?',
      [correo]
    );
    return rows[0] as Usuario | undefined;
  }

  async buscarPorNombreUsuario(nombre: string): Promise<Usuario | undefined> {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM usuarios WHERE nombre_usuario = ?',
      [nombre]
    );
    return rows[0] as Usuario | undefined;
  }

  async crear(usuario: Omit<Usuario, 'id_usuario'>): Promise<Usuario> {
    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre_usuario, correo_electronico, contrasena, rol, estado_cuenta) VALUES (?, ?, ?, ?, ?)',
      [usuario.nombre_usuario, usuario.correo_electronico, usuario.contrasena, usuario.rol, usuario.estado_cuenta]
    );

    const insertId = (result as any).insertId;
    return { id_usuario: insertId, ...usuario };
  }
}