import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HilosForoService } from '../../services/hilos-foro.service';

@Component({
  selector: 'app-publicaciones-foro',
  standalone: true,
  templateUrl: './publicaciones-foro.html',
  styleUrls: ['./publicaciones-foro.css']
})
export class PublicacionesForo {
  constructor(
    private hilosService: HilosForoService,
    private router: Router
  ) {}

  publicarMensaje(alias: string, titulo: string, mensaje: string) {
    if (!titulo.trim() || !mensaje.trim()) {
      return;
    }

    this.hilosService.agregarHilo({
      titulo,
      contenido_inicial: mensaje,
      alias_anonimo: alias
    });

    this.router.navigate(['/hilos-foro']);
  }
}