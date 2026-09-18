import { HiloForo } from '../models/HiloForo';

const hilos: HiloForo[] = [
  { id_hilo: 1, id_usuario: 3, alias_anonimo: 'Anónimo', titulo: 'Hilo A', contenido_inicial: 'Tengo dudas con bots', estado_hilo: 'abierto', total_respuestas: 2 },
  { id_hilo: 2, id_usuario: null, alias_anonimo: 'Anti', titulo: 'Hilo B', contenido_inicial: 'Datos para ir a denunciar', estado_hilo: 'fijado', total_respuestas: 1 },
  { id_hilo: 3, id_usuario: 4, alias_anonimo: 'Anónimo', titulo: 'Hilo C', contenido_inicial: 'Dudas de seguridad Wifi', estado_hilo: 'abierto', total_respuestas: 2 },
  { id_hilo: 4, id_usuario: 5, alias_anonimo: 'User', titulo: 'Hilo D', contenido_inicial: 'Acoso en partidas de juego', estado_hilo: 'cerrado', total_respuestas: 0 },
  { id_hilo: 5, id_usuario: null, alias_anonimo: 'Anónimo', titulo: 'Hilo E', contenido_inicial: 'Ojo con links en discord', estado_hilo: 'abierto', total_respuestas: 0 }
];

export class HiloForoRepository {
  listarFijados(): HiloForo[] {
    return hilos.filter(h => h.estado_hilo === 'fijado');
  }

  listarRecientes(limite: number): HiloForo[] {
    return hilos.slice(-limite).reverse();
  }
}