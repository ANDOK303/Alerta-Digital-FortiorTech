import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDenunciasService {
  private apiUrl = 'http://localhost:3000/api/admin/denuncias'; // Ajusta la ruta a tu backend si es distinta

  constructor(private http: HttpClient) {}

  getDenuncias(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearDenuncia(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  actualizarDenuncia(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminarDenuncia(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}