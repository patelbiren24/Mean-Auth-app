import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  /* Here we are protecting the routes
    The idea is to see if a user is loggedin, if the user is 
    logged in, then we simply return true else we will redirect 
    the user to login page
  */

  canActivate() {
    if (this.authService.loggedin()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
