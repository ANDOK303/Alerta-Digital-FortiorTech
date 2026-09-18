export interface HiloForo {
  id_hilo: number;
  id_usuario: number | null;
  alias_anonimo: string;
  titulo: string;
  contenido_inicial: string;
  estado_hilo: 'abierto' | 'cerrado' | 'fijado';
  total_respuestas: number;
}