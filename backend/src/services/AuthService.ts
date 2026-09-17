import { UsuarioRepository } from '../repositories/UsuarioRepository';

export class AuthService {
  private repo = new UsuarioRepository();

  login(correo: string, contrasena: string) {
    const usuario = this.repo.buscarPorCorreo(correo);

    if (!usuario) {
      return { exito: false, mensaje: 'Usuario no encontrado' };
    }

    if (usuario.contrasena !== contrasena) {
      return { exito: false, mensaje: 'Contraseña incorrecta' };
    }

    if (usuario.estado_cuenta !== 'activo') {
      return { exito: false, mensaje: 'Cuenta no activa' };
    }

    const { contrasena: _, ...usuarioSinPassword } = usuario;
    return { exito: true, usuario: usuarioSinPassword };
  }
}