import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL } from '../utility';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;

  public setUser(user: User): void {
    this.user = user;
  }

  // public getUser(): Observable<User> {
  //   return  new Observable((observer) => {
  //     observer.next(this.user);
  //   });
  // }


  public getUser(): User {
    return this.user;
  }

  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(URL + 'register', user);
  }

  login(useremail: string, pass: string): Observable<User> {
   const body = {email: useremail, password: pass};
   return this.httpClient.post<User>(URL + 'authenticate', body);
  }


  logout(): Observable<boolean> {
    const params = new HttpParams().set('email', this.user.email);
    return this.httpClient.get<boolean>(URL + 'logout', {params});
  }
}
