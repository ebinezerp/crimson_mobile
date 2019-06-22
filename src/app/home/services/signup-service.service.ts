import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { localURL, webURL } from '../utility';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(localURL + 'register', user);
   }
}
