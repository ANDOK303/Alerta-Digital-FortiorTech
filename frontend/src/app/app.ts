import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // ¡Esto es clave para que funcionen las rutas!
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Alerta Digital';
}
