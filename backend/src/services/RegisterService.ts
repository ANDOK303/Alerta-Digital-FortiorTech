import { UsuarioRepository } from '../repositories/UsuarioRepository';

export class RegisterService {
  private repo = new UsuarioRepository();

  async registrar(nombre_usuario: string, correo_electronico: string, contrasena: string) {
    if (await this.repo.buscarPorCorreo(correo_electronico)) {
      return { exito: false, mensaje: 'El correo ya está registrado' };
    }

    if (await this.repo.buscarPorNombreUsuario(nombre_usuario)) {
      return { exito: false, mensaje: 'El nombre de usuario ya existe' };
    }

    const nuevoUsuario = await this.repo.crear({
      nombre_usuario,
      correo_electronico,
      contrasena,
      rol: 'usuario',
      estado_cuenta: 'activo'
    });

    const { contrasena: _, ...usuarioSinPassword } = nuevoUsuario;
    return { exito: true, usuario: usuarioSinPassword };
  }
}