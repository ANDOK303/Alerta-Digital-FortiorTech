import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  templateUrl: './admin-home.html',
  styleUrls: ['./admin-home.css']
})
export class AdminHome {
  constructor(private router: Router) {}

  irAUsuarios() { this.router.navigate(['/admin-usuarios']); }
  irAHilos() { this.router.navigate(['/admin-hilos']); }
  irADenuncias() { this.router.navigate(['/admin-denuncias']); }
  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
}