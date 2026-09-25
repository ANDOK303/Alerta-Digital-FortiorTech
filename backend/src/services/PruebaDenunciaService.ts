import { PruebaDenunciaRepository } from '../repositories/PruebaDenunciaRepository';
import { PruebaDenuncia } from '../models/Prueba-denuncia';

export class PruebaDenunciaService {
  private repo = new PruebaDenunciaRepository();

  async listar() { return await this.repo.obtenerTodas(); }
  async buscarPorId(id: number) { return await this.repo.obtenerPorId(id); }
  async crear(datos: PruebaDenuncia) { return await this.repo.crear(datos); }
  async actualizar(id: number, datos: Partial<PruebaDenuncia>) { return await this.repo.actualizar(id, datos); }
  async eliminar(id: number) { return await this.repo.eliminar(id); }
}