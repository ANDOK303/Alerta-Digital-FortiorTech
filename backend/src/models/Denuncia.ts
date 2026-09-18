export interface Denuncia {
  id_denuncia: number;
  id_usuario: number | null;
  titulo: string;
  descripcion: string;
  tipo_ciberacoso: string;
  estado_denuncia: 'pendiente' | 'en_revision' | 'atendida' | 'descartada';
  nivel_prioridad: 'baja' | 'media' | 'alta' | 'urgente';
}