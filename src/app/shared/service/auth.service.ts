import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedIn = false;
  private isAdminUser = false;

  constructor() {}

  isLoggedIn() {
    return this.isUserLoggedIn;
  }

  isAdmin() {
    return this.isAdminUser;
  }

  onLogin(credentials: any) {
    if (credentials.username === 'test' && credentials.password === 'test01') {
      this.isUserLoggedIn = true;
      return of(true);
    }

    if (
      credentials.username === 'admin' &&
      credentials.password === 'admin01'
    ) {
      this.isUserLoggedIn = true;
      this.isAdminUser = true;
      return of(true);
    }

    //return this.http.post('', credentials)

    return of(false);
  }
}
