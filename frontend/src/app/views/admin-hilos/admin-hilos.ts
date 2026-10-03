import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-hilos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-hilos.html'
})
export class AdminHilos implements OnInit {
  hilos: any[] = [];
  hiloActual: any = { titulo: '', contenido_inicial: '', estado: 'abierto', alias_anonimo: '' };
  modoEdicion: boolean = false;

  ngOnInit() {
    this.hilos = [
      { id: 1, titulo: 'Problemas de red', contenido_inicial: 'Alguien más con fallos?', estado: 'abierto', total_respuestas: 5, usuario: 'admin' }
    ];
  }

  guardarHilo() {
    console.log('Guardando hilo:', this.hiloActual);
    this.cancelar();
  }

  editarHilo(h: any) {
    this.hiloActual = { ...h };
    this.modoEdicion = true;
  }

  eliminarHilo(id: number) {
    console.log('Eliminando hilo:', id);
  }

  cancelar() {
    this.hiloActual = { titulo: '', contenido_inicial: '', estado: 'abierto', alias_anonimo: '' };
    this.modoEdicion = false;
  }
}