import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {
  correo_electronico = '';
  contrasena = '';
  mensajeError = '';
  constructor(private router: Router, private http: HttpClient) {}

  iniciarSesion() {

    this.http.post<any>('http://localhost:3000/api/auth/login', {

      correo_electronico: this.correo_electronico,

      contrasena: this.contrasena

    }).subscribe({

      next: (respuesta) => {

        localStorage.setItem('usuario', JSON.stringify(respuesta.usuario));

        this.router.navigate(['/home']);

      },

      error: (error) => {

        this.mensajeError = error.error?.mensaje || 'Error al iniciar sesión';

      }

    });

  }

}
 