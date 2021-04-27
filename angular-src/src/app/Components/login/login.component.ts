import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  password: String;
  username: String;

  constructor(
    private authService: AuthService,
    private flashMessages: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password,
    };
    this.authService.authenticateUser(user).subscribe((data) => {
      if ((data as any).success) {
        this.authService.storeUserData((data as any).token, (data as any).user);
        this.flashMessages.show('You are now logged in', {
          cssClass: 'alert alert-success',
        });
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessages.show((data as any).msg, {
          cssClass: 'alert alert-danger',
          timeout: 5000,
        });
        this.router.navigate(['/login']);
      }
    });
  }
}
