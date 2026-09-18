export interface Recomendacion {
  id_recomendacion: number;
  id_categoria: number;
  id_autor: number;
  titulo: string;
  contenido_pasos: string;
  plataforma_objetivo: string;
  es_destacado: boolean;
}