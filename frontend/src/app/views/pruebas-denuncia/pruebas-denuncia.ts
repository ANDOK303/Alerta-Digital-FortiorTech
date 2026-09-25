import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pruebas-denuncia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pruebas-denuncia.html',
  styleUrls: ['./pruebas-denuncia.css']
})
export class PruebasDenuncia {
  private apiUrl = 'http://localhost:3000/api/pruebas';

  id_denuncia: number = 1;
  descripcion_evidencia: string = '';

  // Datos del archivo
  url_archivo: string = '';
  tipo_archivo: string = 'image/png';
  tamano_bytes: number = 0;

  constructor(private http: HttpClient) {}

  onArchivoSeleccionado(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.url_archivo = file.name;
      this.tipo_archivo = file.type || 'application/octet-stream';
      this.tamano_bytes = file.size;
    }
  }

  subirPrueba(): void {
    if (!this.url_archivo) {
      alert('Por favor selecciona un archivo de evidencia.');
      return;
    }

    const payload = {
      id_denuncia: Number(this.id_denuncia),
      url_archivo: this.url_archivo,
      tipo_archivo: this.tipo_archivo,
      tamano_bytes: this.tamano_bytes,
      descripcion_evidencia: this.descripcion_evidencia
    };

    this.http.post(this.apiUrl, payload).subscribe({
      next: () => {
        alert('¡Prueba de denuncia registrada con éxito!');
        this.descripcion_evidencia = '';
        this.url_archivo = '';
      },
      error: (err) => {
        console.error('Error al subir prueba:', err);
        alert('Ocurrió un error al registrar la evidencia en MySQL.');
      }
    });
  }
}
