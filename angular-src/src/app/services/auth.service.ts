import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';
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

  getProfile() {
    let url = 'http://localhost:3000/users/profile';
    this.loadToken();
    const headers = { Authorization: this.authToken };
    return this.http.get(url, { headers });
  }
  //Function that gets the token from local storage
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  //checks to see if a user is logged in
  loggedin() {
    return tokenNotExpired('id_token');
  }

  logout() {
    //Set token and user info to null and clear local storage
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
