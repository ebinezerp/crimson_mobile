import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL } from '../utility/utility';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;
  private loginMail: string;

  public setUser(user: User): void {
    if (user.cart == null) {
      user.cart = new Cart();
      user.cart.quantity = 0;
      user.cart.totalAmount = 0;
    }
    this.user = user;
    console.log(this.user.cart);
  }

  public getUser(): User {
    return this.user;
  }

  public setLoginMail(email: string): void {
    this.loginMail = email;
  }

  public getLoginMail(): string {
    return this.loginMail;
  }

  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(URL + 'register', user);
  }

  getCartCount(): number {
    let cart: Cart = this.user.cart;
     return cart.quantity;
  }

  login(useremail: string, pass: string): Observable<User> {
   const body = {email: useremail, password: pass};
   return this.httpClient.post<User>(URL + 'authenticate', body);
  }

  logout(): Observable<boolean> {
    const params = new HttpParams().set('email', this.user.email);
    return this.httpClient.get<boolean>(URL + 'logout', {params});
  }

  verifyEmail(email: string): Observable<boolean> {
   return this.httpClient.post<boolean>(URL + 'verifyemail', email);
  }

  resetPassword(email: string, code: string): Observable<boolean> {
    const params = {'email': email, 'code': code};
    return this.httpClient.post<boolean>(URL + 'resetpassword', '' , {params: params});
  }

  setNewPassword(email: string, password: string): Observable<boolean> {
    const params = {email, password};
    return this.httpClient.post<boolean>(URL + 'newpassword', '',{params: params});
  }
}
