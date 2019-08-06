import { Injectable } from '@angular/core';
import { UserDetails } from '../model/user-details';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { URL } from '../utility/utility';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private userDetails: UserDetails;
  private userDetailsSubject = new BehaviorSubject<UserDetails>(undefined);
  public userDetailsObservable = this.userDetailsSubject.asObservable();

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  setUserDetails(userDetails: UserDetails) {
    this.userDetails = userDetails;
    this.userDetailsSubject.next(this.userDetails);
  }

  getUserDetails(): UserDetails {
    return this.userDetails;
  }

  submit(userDetails: UserDetails ): Observable<Order> {
    const params = {
      userId: JSON.stringify(this.userService.getUser().userId)
    };
    return this.httpClient.post<Order>(URL + 'order', userDetails, {params});
  }
}
