import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class Categorias implements OnInit {
  esAdmin = false;
  categorias: any[] = [];
  nuevaCategoria: any = {
    nombre_categoria: '',
    descripcion: '',
    icono_css: '',
    nivel_dificultad: 'basico',
    es_activa: true
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        this.esAdmin = usuario.rol === 'administrador';
      }
    }

    if (this.esAdmin) {
      this.cargarCategorias();
    }
  }

  cargarCategorias() {
    this.http.get<any[]>('http://localhost:3000/api/categorias').subscribe({
      next: (data) => {
        this.categorias = data;
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error al cargar categorías', error)
    });
  }

  guardarCategoria() {
    this.http.post<any>('http://localhost:3000/api/categorias', this.nuevaCategoria).subscribe({
      next: (respuesta) => {
        if (this.esAdmin) {
          this.categorias.push(respuesta);
        }
        this.nuevaCategoria = {
          nombre_categoria: '',
          descripcion: '',
          icono_css: '',
          nivel_dificultad: 'basico',
          es_activa: true
        };
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error al guardar categoría', error)
    });
  }
}