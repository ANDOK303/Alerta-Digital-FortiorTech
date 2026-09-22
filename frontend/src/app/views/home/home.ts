import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  estadoSistema: string = 'SEGURO';
  alertasPendientes: number = 0;

  constructor(private router: Router) {}

  denunciarAcoso() {
    this.router.navigate(['/denuncias']);
  }

  chatOrientacion() {
    this.router.navigate(['/hilos-foro']);
  }

  guiasSeguridad() {
    this.router.navigate(['/recomendaciones']);
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}