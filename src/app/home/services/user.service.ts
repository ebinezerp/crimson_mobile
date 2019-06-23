import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../utility';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(URL + 'register', user);
  }

  login(useremail: string, pass: string): Observable<User> {
   const body = {email: useremail, password: pass};
   return this.httpClient.post<User>(URL + 'authenticate', body);
  }
}
