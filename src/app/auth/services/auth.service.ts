import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<string>;
  public user: Observable<string>;

  constructor() {
    this.userSubject = new BehaviorSubject<string>(sessionStorage.getItem('registeredUser'));
    this.user = this.userSubject.asObservable();
  }

  public get registeredUserValue(): string {
    return this.userSubject.value;
  }

  login(username: string, password: string) {

    if (env.common.login.user == username && env.common.login.pwd == password) {
      sessionStorage.setItem('registeredUser', username);
      this.userSubject.next(username);
      return username;
    }
    else { return null }


  }


}
