import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, of } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private jsonUrl = 'assets/json/jsonCostumerTest.json';



  constructor(private http: HttpClient) {}

  // Método para obtener todos los clientes
  getCustomers(): Observable<any> {
    return this.http.get(this.jsonUrl).pipe(
      catchError((error) => {
        console.error('Error al cargar el JSON:', error);
        return of({ usuario: {}, entrenador: {} }); // valor por defecto en caso de error
      })
    );
  }


  // Método para obtener un cliente por su ID
  getCustomerById(id: number): Observable<Customer | undefined> {
    return new Observable((observer) => {
      this.getCustomers().subscribe(customers => {
        const customer = customers.find((c: Customer) => c.id === id);
        observer.next(customer);
        observer.complete();
      });
    });
  }
}
