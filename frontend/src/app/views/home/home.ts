import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  estadoSistema: string = 'SEGURO';
  alertasPendientes: number = 0;
  usuario: any = null;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        this.usuario = JSON.parse(usuarioGuardado);
      }
    }
  }

  urlFoto(): string {
    return `http://localhost:3000${this.usuario?.foto_perfil}`;
  }

  irADenuncias() {
    this.router.navigate(['/denuncias']);
  }

  irAPruebas() {
    this.router.navigate(['/pruebas-denuncia']);
  }

  irAForo() {
    this.router.navigate(['/publicaciones-foro']);
  }

  irAHiloForo() {
    this.router.navigate(['/hilo-foro']);
  }

  irACalificaciones() {
    this.router.navigate(['/calificaciones-plataforma']);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}