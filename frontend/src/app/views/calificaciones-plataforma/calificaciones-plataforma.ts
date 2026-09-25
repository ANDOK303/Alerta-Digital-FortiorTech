import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calificaciones-plataforma',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './calificaciones-plataforma.html',
  styleUrls: ['./calificaciones-plataforma.css']
})
export class CalificacionesPlataforma {
  enviarCalificacion() {
    console.log('Enviando calificación...');
  }
}