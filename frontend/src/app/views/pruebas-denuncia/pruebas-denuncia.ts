import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas-denuncia',
  standalone: true,
  templateUrl: './pruebas-denuncia.html',
  styleUrls: ['./pruebas-denuncia.css']
})
export class PruebasDenuncia {
  subirPrueba() {
    console.log('Subiendo evidencia...');
  }

  idDenuncia: string = '12345'; // Ejemplo de ID de denuncia
}
