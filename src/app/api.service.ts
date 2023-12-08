import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  private fakeData = [
    { id: 1, nombre: 'Juan', correo: 'juan@example.com' },
    { id: 2, nombre: 'Ana', correo: 'ana@example.com' },
    { id: 3, nombre: 'Carlos', correo: 'carlos@example.com' }
  ];

  getFakeData(): Observable<any[]> {
    // Devuelve los datos quemados en forma de observable
    return of(this.fakeData);
  }
}
