import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {

  constructor(private router: Router) {}

  crearCuenta() {
    console.log('Botón de Crear Cuenta presionado');
    this.router.navigate(['/login']);
  }
}
