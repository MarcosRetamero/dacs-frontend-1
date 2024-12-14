import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ejercicio } from '../models/ejercicio.model';

@Injectable({
  providedIn: 'root',
})
export class EjercicioService {
  private apiUrl = 'https://wger.de/api/v2/exercise/?limit=85&language=4';
  private imageApiUrl = 'https://wger.de/api/v2/exerciseimage/?limit=85'; // URL de las imágenes

  constructor(private http: HttpClient) {}

  // Obtener los ejercicios
  getEjercicios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getImageUrls(): Observable<any> {
    return this.http.get<any>(this.imageApiUrl);
  }
}
