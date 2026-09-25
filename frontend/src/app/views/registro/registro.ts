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

  terminosAceptados: boolean = false;

  constructor(private router: Router) {}

  actualizarTerminos(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.terminosAceptados = checkbox.checked;
  }

  crearCuenta() {
    console.log('Botón de Crear Cuenta presionado');
    this.router.navigate(['/login']);
  }
}
