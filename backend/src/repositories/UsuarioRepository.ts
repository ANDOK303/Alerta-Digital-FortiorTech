import { pool } from '../config/database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';

export class UsuarioRepository {
  
  // Se agrega obtenerTodos para que la tabla del administrador cargue los datos[cite: 4]
  async obtenerTodos(): Promise<any[]> {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT id_usuario, nombre, correo_electronico, rol, estado_cuenta FROM usuarios'
    );
    return rows;
  }

  async buscarPorCorreo(correo: string): Promise<any> {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM usuarios WHERE correo_electronico = ?',
      [correo]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  async obtenerPorId(id: number): Promise<any> {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT id_usuario, nombre, correo_electronico, rol, estado_cuenta FROM usuarios WHERE id_usuario = ?',
      [id]
    );
    return rows.length > 0 ? rows[0] : null;
  }

  async crear(usuario: any): Promise<number> {
    const sql = `
      INSERT INTO usuarios (nombre, correo_electronico, contrasena, rol, estado_cuenta) 
      VALUES (?, ?, ?, ?, 'activo')
    `;
    
    // Asignamos 'estudiante' por defecto si no envían un rol desde el frontend
    const rolUsuario = usuario.rol ? usuario.rol : 'estudiante';

    const [result] = await pool.query<ResultSetHeader>(sql, [
      usuario.nombre,
      usuario.correo_electronico,
      usuario.contrasena,
      rolUsuario
    ]);

    return result.insertId;
  }

  // Se agrega actualizar para que el botón de "Actualizar" del panel admin funcione[cite: 4]
  async actualizar(id: number, usuario: any): Promise<boolean> {
    const sql = `
      UPDATE usuarios 
      SET nombre = ?, correo_electronico = ?, rol = ?
      WHERE id_usuario = ?
    `;
    
    const [result] = await pool.query<ResultSetHeader>(sql, [
      usuario.nombre,
      usuario.correo_electronico,
      usuario.rol,
      id
    ]);

    return result.affectedRows > 0;
  }

  // Se agrega eliminar para el botón de "Eliminar" de la tabla admin[cite: 4]
  async eliminar(id: number): Promise<boolean> {
    const [result] = await pool.query<ResultSetHeader>(
      'DELETE FROM usuarios WHERE id_usuario = ?', 
      [id]
    );
    return result.affectedRows > 0;
  }
}