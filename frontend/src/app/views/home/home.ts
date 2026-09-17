import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  estadoSistema: string = 'SEGURO';
  alertasPendientes: number = 0;

  constructor(private router: Router) {}

  denunciarAcoso() {
    console.log('Redirigiendo al formulario de denuncias...');
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']);
  }
}
