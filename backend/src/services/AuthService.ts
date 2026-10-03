import { UsuarioRepository } from '../repositories/UsuarioRepository';

export class AuthService {
  private repo = new UsuarioRepository();

  async login(correo: string, contrasena: string) {
    const usuario = await this.repo.buscarPorCorreo(correo);

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

  async registro(datos: any) {
    // 1. Verificar si el correo ya está registrado
    const usuarioExistente = await this.repo.buscarPorCorreo(datos.correo_electronico);
    
    if (usuarioExistente) {
      return { exito: false, mensaje: 'El correo electrónico ya está registrado' };
    }

    // 2. Crear el nuevo usuario
    try {
      const idUsuario = await this.repo.crear(datos);
      return { exito: true, mensaje: 'Usuario registrado exitosamente', id_usuario: idUsuario };
    } catch (error) {
      console.error('Error en el servicio de registro:', error);
      return { exito: false, mensaje: 'Error al registrar el usuario en la base de datos' };
    }
  }
}