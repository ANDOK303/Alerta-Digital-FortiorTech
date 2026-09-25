import { PublicacionForoRepository } from '../repositories/PublicacionForoRepository';
import { PublicacionForo } from '../models/Publicacion-foro';

export class PublicacionForoService {
  private repo = new PublicacionForoRepository();

  async listar() { return await this.repo.obtenerTodas(); }
  async buscarPorId(id: number) { return await this.repo.obtenerPorId(id); }
  async crear(datos: PublicacionForo) { return await this.repo.crear(datos); }
  async actualizar(id: number, datos: Partial<PublicacionForo>) { return await this.repo.actualizar(id, datos); }
  async eliminar(id: number) { return await this.repo.eliminar(id); }
}