import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pruebas-denuncia',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pruebas-denuncia.html',
  styleUrls: ['./pruebas-denuncia.css']
})
export class PruebasDenuncia {
  subirPrueba() {
    console.log('Subiendo prueba...');
  }
}