import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pruebas-denuncia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pruebas-denuncia.html',
  styleUrls: ['./pruebas-denuncia.css']
})
export class PruebasDenuncia implements OnInit {
  esAdmin = false;
  pruebas: any[] = [];
  idDenuncia: string = '';
  descripcion: string = '';
  archivoSeleccionado: File | null = null;

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
      }
    }

    if (this.esAdmin) {
      this.cargarPruebas();
    }
  }

  cargarPruebas() {
    this.http.get<any[]>('http://localhost:3000/api/pruebas-denuncia').subscribe({
      next: (data) => {
        this.pruebas = data;
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error al cargar pruebas', error)
    });
  }

  seleccionarArchivo(event: Event) {
    const input = event.target as HTMLInputElement;
    this.archivoSeleccionado = input.files?.[0] || null;
  }

  subirPrueba() {
    if (!this.idDenuncia || !this.archivoSeleccionado) {
      return;
    }

    const nuevaPrueba = {
      id_denuncia: Number(this.idDenuncia),
      url_archivo: this.archivoSeleccionado.name,
      tipo_archivo: this.archivoSeleccionado.type,
      tamano_bytes: this.archivoSeleccionado.size,
      descripcion_evidencia: this.descripcion
    };

    this.http.post<any>('http://localhost:3000/api/pruebas-denuncia', nuevaPrueba).subscribe({
      next: (respuesta) => {
        if (this.esAdmin) {
          this.pruebas.push(respuesta);
        }
        this.idDenuncia = '';
        this.descripcion = '';
        this.archivoSeleccionado = null;
        this.cdr.detectChanges();
      },
      error: (error) => console.error('Error al subir prueba', error)
    });
  }
}