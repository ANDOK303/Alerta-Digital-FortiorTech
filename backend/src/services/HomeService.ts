import { RecomendacionRepository } from '../repositories/RecomendacionRepository';
import { CategoriaRecomendacionRepository } from '../repositories/CategoriaRecomendacionRepository';
import { HiloForoRepository } from '../repositories/HiloForoRepository';
import { DenunciaRepository } from '../repositories/DenunciaRepository';

export class HomeService {
  private recomendacionRepo = new RecomendacionRepository();
  private categoriaRepo = new CategoriaRecomendacionRepository();
  private hiloRepo = new HiloForoRepository();
  private denunciaRepo = new DenunciaRepository();

  obtenerDatosHome() {
    return {
      estadisticas: {
        total_denuncias: this.denunciaRepo.contarTotal(),
        denuncias_pendientes: this.denunciaRepo.contarPendientes(),
        denuncias_urgentes: this.denunciaRepo.contarPorPrioridad('urgente')
      },
      recomendaciones_destacadas: this.recomendacionRepo.listarDestacadas(),
      categorias: this.categoriaRepo.listarActivas(),
      hilos_fijados: this.hiloRepo.listarFijados(),
      hilos_recientes: this.hiloRepo.listarRecientes(3)
    };
  }
}