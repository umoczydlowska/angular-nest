import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get('http://localhost:3000/product');
  }

  addProducts(payload: any) {
    console.log('elko', payload);
    return this.httpClient
      .post('http://localhost:3000/product', payload)
      .subscribe();
  }
}
