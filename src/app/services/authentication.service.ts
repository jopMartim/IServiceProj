import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);
  constructor(private storage: Storage, private router: Router, private http: HttpClient, private plt: Platform) {

    this.plt.ready().then(() => {
      this.checkToken
    });

  }
  Login(user) {
    this.http.post(`http:127.0.0.1:8000/api/v1/login`, user).subscribe(res => {
      return this.storage.set(TOKEN_KEY, `Bearer ${res['token']}`).then(res => {
        this.authenticationState.next(true);
      });
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {

    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }
}
