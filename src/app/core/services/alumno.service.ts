import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Alumno {
  id: number;
  nombre: string;
  edad: number;
  pesoActual: number;
}

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private apiUrl = 'http://localhost:3000/alumnos'; // URL de la API o JSON Server

  constructor(private http: HttpClient) {}

  // Método para obtener los alumnos
  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }
}
