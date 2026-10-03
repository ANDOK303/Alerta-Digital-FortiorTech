import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recomendaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recomendaciones.html',
  styleUrl: './recomendaciones.css'
})
export class Recomendaciones implements OnInit {
  esAdmin = false;
  recomendaciones: any[] = [];
  nuevaRecomendacion: any = {
    id_categoria: null,
    id_autor: null,
    titulo: '',
    contenido_pasos: '',
    plataforma_objetivo: '',
    es_destacado: false
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        this.esAdmin = usuario.rol === 'administrador';
        this.nuevaRecomendacion.id_autor = usuario.id_usuario;
      }
    }

    this.cargarRecomendaciones();
  }

  cargarRecomendaciones() {
    this.http.get<any[]>('http://localhost:3000/api/recomendaciones').subscribe({
      next: (data) => {
        this.recomendaciones = data;
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error al cargar recomendaciones', error)
    });
  }

  guardarRecomendacion() {
    this.http.post<any>('http://localhost:3000/api/recomendaciones', this.nuevaRecomendacion).subscribe({
      next: (respuesta) => {
        this.recomendaciones.push(respuesta);
        this.nuevaRecomendacion = {
          ...this.nuevaRecomendacion,
          id_categoria: null,
          titulo: '',
          contenido_pasos: '',
          plataforma_objetivo: '',
          es_destacado: false
        };
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error al guardar recomendación', error)
    });
  }
}