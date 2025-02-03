import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get('http://localhost:3000/product');
  }

  addProducts(payload: any) {
    return this.httpClient.post('http://localhost:3000/product', payload);
  }
}
