import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-usuarios.html',
  styleUrls: ['./admin-usuarios.css']
})
export class AdminUsuarios implements OnInit {
  usuarios: any[] = [];
  usuarioActual: any = { nombre: '', correo_electronico: '', rol: 'usuario', contrasena: '' };
  modoEdicion: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.adminService.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log('Usuarios cargados:', data); // Revisa esto en la consola F12 del navegador
      },
      error: (err) => console.error('Error al cargar usuarios', err)
    });
  }

  guardarUsuario() {
    if (this.modoEdicion) {
      // Usamos id_usuario que es el campo de tu BD
      this.adminService.actualizarUsuario(this.usuarioActual.id_usuario, this.usuarioActual).subscribe(() => {
        this.cargarUsuarios();
        this.cancelar();
      });
    } else {
      this.adminService.crearUsuario(this.usuarioActual).subscribe(() => {
        this.cargarUsuarios();
        this.cancelar();
      });
    }
  }

  editarUsuario(u: any) {
    this.usuarioActual = { ...u };
    this.modoEdicion = true;
  }

  eliminarUsuario(id: number) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.adminService.eliminarUsuario(id).subscribe(() => {
        this.cargarUsuarios();
      });
    }
  }

  cancelar() {
    this.usuarioActual = { nombre: '', correo_electronico: '', rol: 'usuario', contrasena: '' };
    this.modoEdicion = false;
  }
}