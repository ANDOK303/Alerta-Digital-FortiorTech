import { Injectable } from '@angular/core';

export interface Hilo {
  id: number;
  titulo: string;
  contenido_inicial: string;
  alias_anonimo: string;
  usuario: string;
  estado: string;
  total_respuestas: number;
}

@Injectable({ providedIn: 'root' })
export class HilosForoService {
  private hilos: Hilo[] = [];
  private nextId = 1;

  obtenerHilos(): Hilo[] {
    return this.hilos;
  }

  agregarHilo(datos: { titulo: string; contenido_inicial: string; alias_anonimo: string }) {
    this.hilos.unshift({
      id: this.nextId++,
      titulo: datos.titulo,
      contenido_inicial: datos.contenido_inicial,
      alias_anonimo: datos.alias_anonimo,
      usuario: 'Tú', // aquí luego pondrás el usuario real de sesión
      estado: 'abierto',
      total_respuestas: 0
    });
  }
}