import { Recomendacion } from '../models/Recomendacion';

const recomendaciones: Recomendacion[] = [
  { id_recomendacion: 1, id_categoria: 1, id_autor: 1, titulo: 'Paso A', contenido_pasos: 'Pasos para cerrar tu cuenta', plataforma_objetivo: 'Instagram', es_destacado: true },
  { id_recomendacion: 2, id_categoria: 3, id_autor: 1, titulo: 'Paso B', contenido_pasos: 'Usa doble factor de acceso', plataforma_objetivo: 'General', es_destacado: true },
  { id_recomendacion: 3, id_categoria: 2, id_autor: 2, titulo: 'Paso C', contenido_pasos: 'No abras links sospechosos', plataforma_objetivo: 'General', es_destacado: false },
  { id_recomendacion: 4, id_categoria: 1, id_autor: 2, titulo: 'Paso D', contenido_pasos: 'Quita tu numero de la app', plataforma_objetivo: 'Telegram', es_destacado: false },
  { id_recomendacion: 5, id_categoria: 5, id_autor: 1, titulo: 'Paso E', contenido_pasos: 'Bloquea directo al agresor', plataforma_objetivo: 'General', es_destacado: true }
];

export class RecomendacionRepository {
  listarDestacadas(): Recomendacion[] {
    return recomendaciones.filter(r => r.es_destacado);
  }
}