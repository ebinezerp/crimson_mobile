import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { URL } from '../utility/utility';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>( URL + 'category');
  }

  getCategoryProducts(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(URL + 'category/' + categoryId);
  }
}
