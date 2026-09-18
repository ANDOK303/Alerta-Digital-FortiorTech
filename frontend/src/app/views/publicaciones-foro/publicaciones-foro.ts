import { Component } from '@angular/core';

@Component({
  selector: 'app-publicaciones-foro',
  standalone: true,
  templateUrl: './publicaciones-foro.html',
  styleUrls: ['./publicaciones-foro.css']
})
export class PublicacionesForo {
  publicarMensaje() {
    console.log('Publicando respuesta en el foro...');
  }
}
