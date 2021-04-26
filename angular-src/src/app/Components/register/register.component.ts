import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  onRegisterSubmit() {
    //Create a user object that stores the information about the user
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    };
    //if the required items are not filled
    if (!this.validateService.validateRegister(user)) {
      console.log('Before flash');
      this.flashMessages.show('Please fill out all the fields', {
        cssClass: 'alert alert-danger',
        timeout: 3000,
      });
      console.log('After flash');

      return false;
    }
    //If the email is not valid
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessages.show('please enter a valid email', {
        cssClass: 'alert-danger',
        timeout: 3000,
      });
      return false;
    }
    //Registering user
    this.authService.registerUser(user).subscribe((data) => {
      if ((data as any).success) {
        this.flashMessages.show('You are now Registered', {
          cssClass: 'alert alert-success',
          timeout: 3000,
        });
        this.router.navigate(['/login']);
      } else {
        this.flashMessages.show('Please Try again', {
          cssClass: 'alert alert-danger',
          timeout: 3000,
        });
      }
    });
  }

  ngOnInit(): void {}
}
