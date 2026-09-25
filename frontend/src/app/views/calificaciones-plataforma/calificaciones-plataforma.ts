import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calificaciones-plataforma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calificaciones-plataforma.html',
  styleUrls: ['./calificaciones-plataforma.css']
})
export class CalificacionesPlataforma implements OnInit {
  private apiUrl = 'http://localhost:3000/api/calificaciones';

  puntuacion: number = 5;
  tipo_evaluacion: string = 'General';
  comentario: string = '';
  se_recomienda_sitio: boolean = true;

  mostrarModal: boolean = false;
  cargando: boolean = false; // Escudo protector contra doble-clic
  listaCalificaciones: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerCalificaciones();
  }

  obtenerCalificaciones(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.listaCalificaciones = [...data];
      },
      error: (err) => console.error('Error al obtener:', err)
    });
  }

  limpiarFormulario(): void {
    this.puntuacion = 5;
    this.tipo_evaluacion = 'General';
    this.comentario = '';
    this.se_recomienda_sitio = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  enviarCalificacion(): void {
    // Si ya está cargando o el modal está abierto, ignorar clics adicionales
    if (this.cargando || this.mostrarModal) return;

    if (!this.comentario || !this.comentario.trim()) {
      alert('Por favor escribe un comentario antes de enviar.');
      return;
    }

    this.cargando = true; // Bloquea el botón

    const payload = {
      id_usuario: 1,
      puntuacion: Number(this.puntuacion),
      tipo_evaluacion: this.tipo_evaluacion,
      comentario: this.comentario.trim(),
      se_recomienda_sitio: this.se_recomienda_sitio
    };

    this.http.post(this.apiUrl, payload).subscribe({
      next: () => {
        this.cargando = false; // Desbloquea
        this.mostrarModal = true;
        this.obtenerCalificaciones(); // Actualiza tarjetas
        this.limpiarFormulario(); // Vacia campos
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error:', err);
        alert('Ocurrió un error al guardar la calificación.');
      }
    });
  }
}
