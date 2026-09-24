import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-denuncias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './denuncias.html',
  styleUrls: ['./denuncias.css']
})
export class Denuncias implements OnInit {
  esAdmin = false;
  denuncias: any[] = [];
  nuevaDenuncia: any = {};
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {}
 
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        this.esAdmin = usuario.rol === 'administrador';
      }
    }
  }

  guardarDenuncia() {
    this.http.post<any>('http://localhost:3000/api/denuncias', this.nuevaDenuncia)
      .subscribe({
        next: (respuesta) => {
          this.denuncias.push(respuesta);
          this.nuevaDenuncia = {};
        },
        error: (error) => {
          console.error('Error al guardar denuncia', error);
        }
      });
  }
  actualizarEstado(d: any) {
    this.http.patch(`http://localhost:3000/api/denuncias/${d.id_denuncia}/estado`, {
      estado_denuncia: d.estado_denuncia
    }).subscribe({
      error: (error) => {
        console.error('Error al actualizar estado', error);
      }
    });
  }
}