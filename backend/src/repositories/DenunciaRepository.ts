import { Denuncia } from '../models/Denuncia';

const denuncias: Denuncia[] = [
  { id_denuncia: 1, id_usuario: 3, titulo: 'Caso A', descripcion: 'Acoso en redes sociales', tipo_ciberacoso: 'Hostigamiento', estado_denuncia: 'pendiente', nivel_prioridad: 'alta' },
  { id_denuncia: 2, id_usuario: 4, titulo: 'Caso B', descripcion: 'Robo de mi cuenta de chat', tipo_ciberacoso: 'Suplantación', estado_denuncia: 'en_revision', nivel_prioridad: 'urgente' },
  { id_denuncia: 3, id_usuario: null, titulo: 'Caso C', descripcion: 'Mensajes feos de anonimo', tipo_ciberacoso: 'Acoso', estado_denuncia: 'atendida', nivel_prioridad: 'media' },
  { id_denuncia: 4, id_usuario: 5, titulo: 'Caso D', descripcion: 'Pasaron mi numero publico', tipo_ciberacoso: 'Doxxing', estado_denuncia: 'pendiente', nivel_prioridad: 'urgente' },
  { id_denuncia: 5, id_usuario: 3, titulo: 'Caso E', descripcion: 'Burlas en foro de escuela', tipo_ciberacoso: 'Ciberbullying', estado_denuncia: 'descartada', nivel_prioridad: 'baja' }
];

export class DenunciaRepository {
  contarTotal(): number {
    return denuncias.length;
  }

  contarPendientes(): number {
    return denuncias.filter(d => d.estado_denuncia === 'pendiente').length;
  }

  contarPorPrioridad(prioridad: string): number {
    return denuncias.filter(d => d.nivel_prioridad === prioridad).length;
  }
}