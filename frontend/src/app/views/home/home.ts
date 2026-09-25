import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Importamos RouterLinkActive para que pinte de azul el menú actual
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  estadoSistema: string = 'SEGURO';
  alertasPendientes: number = 0;

  constructor(private router: Router) { }

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
