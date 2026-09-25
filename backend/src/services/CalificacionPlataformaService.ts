import { CalificacionPlataformaRepository } from '../repositories/CalificacionPlataformaRepository';
import { CalificacionPlataforma } from '../models/Calificacion-plataforma';

export class CalificacionPlataformaService {
  private repo = new CalificacionPlataformaRepository();

  async listar() { return await this.repo.obtenerTodas(); }
  async buscarPorId(id: number) { return await this.repo.obtenerPorId(id); }
  async crear(datos: CalificacionPlataforma) { return await this.repo.crear(datos); }
  async actualizar(id: number, datos: Partial<CalificacionPlataforma>) { return await this.repo.actualizar(id, datos); }
  async eliminar(id: number) { return await this.repo.eliminar(id); }
}