export interface CategoriaRecomendacion {
  id_categoria: number;
  nombre_categoria: string;
  descripcion: string;
  icono_css: string;
  nivel_dificultad: 'basico' | 'intermedio' | 'avanzado';
  es_activa: boolean;
}