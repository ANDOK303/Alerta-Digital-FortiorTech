import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HilosForoService } from '../../services/hilos-foro.service'; // ajusta la ruta

@Component({
  selector: 'app-hilos-foro',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hilos-foro.html',
  styleUrl: './hilos-foro.css'
})
export class HilosForo {
  constructor(private hilosService: HilosForoService) {}

  get hilos() {
    return this.hilosService.obtenerHilos();
  }
}