import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from '../utility/utility';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(URL + 'products');
  }

  setProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
    this.products = products;
  }

  getProduct(id: number): Product {

    if (this.products == null || this.products.length === 0 || this.products == undefined) {
      this.products = JSON.parse(localStorage.getItem('products'));
    }


    return this.products.find((product) => {
      if (product.id === id) {
        return true;
      }
    });
  }

}
