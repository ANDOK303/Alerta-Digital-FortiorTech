import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // 1. IMPORTAR ROUTER
import { AdminDenunciasService } from '../../services/admin-denuncias.service';

@Component({
  selector: 'app-admin-denuncias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-denuncias.html',
  styleUrls: ['./admin-denuncias.css'] 
})
export class AdminDenuncias implements OnInit {
  denuncias: any[] = [];
  
  denunciaActual: any = {
    titulo_caso: '',
    descripcion_detallada: '',
    tipo_ciberacoso: '',
    nivel_prioridad: 'Alta',
    estado_resolucion: 'Pendiente'
  };
  
  modoEdicion: boolean = false;

  // 2. INYECTAR EL ROUTER EN EL CONSTRUCTOR
  constructor(
    private service: AdminDenunciasService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.cargarDenuncias();
  }

  // 3. FUNCIÓN PARA VOLVER AL HOME ADMIN
  volverAlHomeAdmin() {
    this.router.navigate(['/admin-home']);
  }

  cargarDenuncias() {
    this.service.getDenuncias().subscribe({
      next: (data) => {
        this.denuncias = data;
      },
      error: (err) => console.error('Error al cargar denuncias', err)
    });
  }

  guardarDenuncia() {
    if (this.modoEdicion) {
      this.service.actualizarDenuncia(this.denunciaActual.id_denuncia, this.denunciaActual).subscribe({
        next: () => {
          alert('Denuncia actualizada con éxito');
          this.cargarDenuncias();
          this.cancelar();
        },
        error: (err) => console.error('Error al actualizar', err)
      });
    } else {
      this.service.crearDenuncia(this.denunciaActual).subscribe({
        next: () => {
          alert('Denuncia creada con éxito');
          this.cargarDenuncias();
          this.cancelar();
        },
        error: (err) => console.error('Error al crear', err)
      });
    }
  }

  editarDenuncia(d: any) {
    this.denunciaActual = { ...d };
    this.modoEdicion = true;
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  eliminarDenuncia(id: number) {
    if (confirm('¿Estás seguro de eliminar esta denuncia de forma permanente?')) {
      this.service.eliminarDenuncia(id).subscribe({
        next: () => {
          alert('Denuncia eliminada');
          this.cargarDenuncias();
        },
        error: (err) => console.error('Error al eliminar', err)
      });
    }
  }

  cancelar() {
    this.denunciaActual = {
      titulo_caso: '',
      descripcion_detallada: '',
      tipo_ciberacoso: '',
      nivel_prioridad: 'Alta',
      estado_resolucion: 'Pendiente'
    };
    this.modoEdicion = false;
  }
}