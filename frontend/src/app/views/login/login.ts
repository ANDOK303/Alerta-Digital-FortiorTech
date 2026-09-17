import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  constructor(private router: Router) {}

  iniciarSesion() {
    console.log('Botón de Iniciar Sesión presionado');
    this.router.navigate(['/home']);
  }
}
