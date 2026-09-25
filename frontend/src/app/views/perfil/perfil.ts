import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil implements OnInit {
  usuario: any = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        this.usuario = JSON.parse(usuarioGuardado);
      }
    }
  }

  seleccionarFoto(event: Event) {
    const input = event.target as HTMLInputElement;
    const archivo = input.files?.[0];

    if (archivo && this.usuario) {
      const formData = new FormData();
      formData.append('foto', archivo);

      this.http.post<any>(`http://localhost:3000/api/usuarios/${this.usuario.id_usuario}/foto`, formData)
        .subscribe({
          next: (respuesta) => {
            this.usuario.foto_perfil = respuesta.foto_perfil;
            if (isPlatformBrowser(this.platformId)) {
              localStorage.setItem('usuario', JSON.stringify(this.usuario));
            }
          },
          error: (error) => {
            console.error('Error al subir la foto', error);
          }
        });
    }
  }

  urlFoto(): string {
    return `http://localhost:3000${this.usuario?.foto_perfil}`;
  }
}