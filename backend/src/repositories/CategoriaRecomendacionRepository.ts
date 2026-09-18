import { CategoriaRecomendacion } from '../models/CategoriaRecomendacion';

const categorias: CategoriaRecomendacion[] = [
  { id_categoria: 1, nombre_categoria: 'Cuentas', descripcion: 'Ajustar la privacidad', icono_css: 'css1', nivel_dificultad: 'basico', es_activa: true },
  { id_categoria: 2, nombre_categoria: 'Enlaces', descripcion: 'Evitar paginas falsas', icono_css: 'css2', nivel_dificultad: 'intermedio', es_activa: true },
  { id_categoria: 3, nombre_categoria: 'Claves', descripcion: 'Hacer contrasenas fuertes', icono_css: 'css3', nivel_dificultad: 'basico', es_activa: true },
  { id_categoria: 4, nombre_categoria: 'Redes', descripcion: 'Navegacion segura vpn', icono_css: 'css4', nivel_dificultad: 'avanzado', es_activa: true },
  { id_categoria: 5, nombre_categoria: 'Mental', descripcion: 'Como actuar y que hacer', icono_css: 'css5', nivel_dificultad: 'basico', es_activa: true }
];

export class CategoriaRecomendacionRepository {
  listarActivas(): CategoriaRecomendacion[] {
    return categorias.filter(c => c.es_activa);
  }
}