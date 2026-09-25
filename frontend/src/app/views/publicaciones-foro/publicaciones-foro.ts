import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publicaciones-foro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publicaciones-foro.html',
  styleUrls: ['./publicaciones-foro.css']
})
export class PublicacionesForo {
  private apiUrl = 'http://localhost:3000/api/publicaciones';

  alias: string = '';
  mensaje: string = '';
  url_imagen_adjunta: string | null = null;

  constructor(private http: HttpClient) {}

  onArchivoSeleccionado(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.url_imagen_adjunta = file.name;
    }
  }

  publicarMensaje(): void {
    if (!this.mensaje.trim()) {
      alert('Por favor escribe un mensaje para publicar.');
      return;
    }

    const payload = {
      id_hilo: 1,
      id_usuario: null,
      alias_anonimo: this.alias.trim() || 'Anónimo',
      mensaje: this.mensaje,
      url_imagen_adjunta: this.url_imagen_adjunta
    };

    this.http.post(this.apiUrl, payload).subscribe({
      next: () => {
        alert('¡Publicación enviada correctamente al foro!');
        this.alias = '';
        this.mensaje = '';
        this.url_imagen_adjunta = null;
      },
      error: (err) => {
        console.error('Error al publicar:', err);
        alert('Ocurrió un error al guardar la publicación.');
      }
    });
  }
}
