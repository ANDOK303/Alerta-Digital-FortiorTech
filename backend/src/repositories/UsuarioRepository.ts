import { Usuario } from '../models/Usuario';

const usuarios: Usuario[] = [
  { id_usuario: 1, nombre_usuario: 'juan', correo_electronico: 'juan@alertadigital.com', contrasena: 'pass123', rol: 'administrador', estado_cuenta: 'activo' },
  { id_usuario: 2, nombre_usuario: 'luis', correo_electronico: 'luis@alertadigital.com', contrasena: 'pass456', rol: 'moderador', estado_cuenta: 'activo' },
  { id_usuario: 3, nombre_usuario: 'gaby', correo_electronico: 'gaby@alertadigital.com', contrasena: 'pass789', rol: 'usuario', estado_cuenta: 'activo' },
  { id_usuario: 4, nombre_usuario: 'hugo', correo_electronico: 'hugo@alertadigital.com', contrasena: 'passabc', rol: 'usuario', estado_cuenta: 'activo' },
  { id_usuario: 5, nombre_usuario: 'paco', correo_electronico: 'paco@alertadigital.com', contrasena: 'passxyz', rol: 'usuario', estado_cuenta: 'activo' }
];

export class UsuarioRepository {
  buscarPorCorreo(correo: string): Usuario | undefined {
    return usuarios.find(u => u.correo_electronico === correo);
  }
}