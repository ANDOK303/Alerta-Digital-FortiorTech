import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  estadoSistema: string = 'SEGURO';
  alertasPendientes: number = 0;

  constructor(private router: Router) {}

  // Funciones infalibles para navegar por código
  irAPruebas() {
    this.router.navigate(['/pruebas-denuncia']);
  }

  irAForo() {
    this.router.navigate(['/publicaciones-foro']);
  }

  irACalificaciones() {
    this.router.navigate(['/calificaciones-plataforma']);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}
