// bff.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BffService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // Método para obtener los datos desde el BFF
  getDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
