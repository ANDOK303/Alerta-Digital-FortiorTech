import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publicaciones-foro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publicaciones-foro.html',
  styleUrls: ['./publicaciones-foro.css']
})
export class PublicacionesForo implements OnInit {
  publicaciones: any[] = [];
  archivoSeleccionado: File | null = null; // <-- Propiedad agregada

  constructor(
    private http: HttpClient,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.cargarPublicaciones();
  }

  cargarPublicaciones() {
    this.http.get<any[]>('http://localhost:3000/api/publicaciones-foro').subscribe({
      next: (data) => {
        this.publicaciones = data;
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error al cargar publicaciones', error)
    });
  }

  // <-- Función agregada para solucionar el error de compilación
  onArchivoSeleccionado(event: Event) {
    const input = event.target as HTMLInputElement;
    this.archivoSeleccionado = input.files?.[0] || null;
  }

  publicarMensaje(alias: string, idHilo: string, mensaje: string) {
    if (!idHilo.trim() || !mensaje.trim()) {
      return;
    }

    const nuevaPublicacion = {
      id_hilo: Number(idHilo),
      alias_anonimo: alias || 'Anónimo',
      mensaje
    };

    this.http.post<any>('http://localhost:3000/api/publicaciones-foro', nuevaPublicacion).subscribe({
      next: (respuesta) => {
        this.publicaciones.push(respuesta);
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error al publicar', error)
    });
  }
}