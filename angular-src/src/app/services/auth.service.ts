import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http: HttpClient) {}
  //We connect this function to our backend
  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('http://localhost:3000/users/register', user, {
        headers: headers,
      })
      .pipe(map((response) => response));
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('http://localhost:3000/users/authenticate', user, {
        headers: headers,
      })
      .pipe(map((response) => response));
  }

  storeUserData(token, user) {
    //local storeage looks for id_token path
    localStorage.setItem('id_token', token);
    //User info
    localStorage.setItem('user', JSON.stringify(user));
    //store the data in our variable
    this.authToken = token;
    this.user = user;
  }

  logout() {
    //Set token and user info to null and clear local storage
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
