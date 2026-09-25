export interface Usuario {
  id_usuario: number;
  nombre_usuario: string;
  correo_electronico: string;
  contrasena: string;
  rol: 'usuario' | 'moderador' | 'administrador';
  estado_cuenta: 'activo' | 'suspendido' | 'inactivo';
  foto_perfil?: string | null;
}