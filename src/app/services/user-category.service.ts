import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../utility/utility';
import { UserCategory } from '../model/user-category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCategoryService {

  constructor(private httpClient: HttpClient) { }

  getUserCategories(): Observable<UserCategory[]> {
    return this.httpClient.get<UserCategory[]>( URL + 'usercategory' );
  }
}
