import { Component } from '@angular/core';

@Component({
  selector: 'app-calificaciones-plataforma',
  standalone: true,
  templateUrl: './calificaciones-plataforma.html',
  styleUrls: ['./calificaciones-plataforma.css']
})
export class CalificacionesPlataforma {
  enviarCalificacion() {
    console.log('Enviando calificación de la plataforma...');
  }
}
