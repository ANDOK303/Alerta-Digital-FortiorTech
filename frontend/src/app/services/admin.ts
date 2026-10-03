import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/api/admin'; // Ajusta al puerto de tu backend

  constructor(private http: HttpClient) {}

  // Usuarios
  getUsuarios(): Observable<any[]> { return this.http.get<any[]>(`${this.apiUrl}/usuarios`); }
  crearUsuario(usuario: any): Observable<any> { return this.http.post(`${this.apiUrl}/usuarios`, usuario); }
  actualizarUsuario(id: number, usuario: any): Observable<any> { return this.http.put(`${this.apiUrl}/usuarios/${id}`, usuario); }
  eliminarUsuario(id: number): Observable<any> { return this.http.delete(`${this.apiUrl}/usuarios/${id}`); }

  // Denuncias
  getDenuncias(): Observable<any[]> { return this.http.get<any[]>(`${this.apiUrl}/denuncias`); }
  actualizarEstadoDenuncia(id: number, datos: any): Observable<any> { return this.http.put(`${this.apiUrl}/denuncias/${id}`, datos); }
}