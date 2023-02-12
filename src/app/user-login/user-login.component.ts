import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private loginService: LoginServiceService, private route: Router) { }

  title: string = "User Log In Form"
  ie: boolean = false;
  ip: boolean = false;

  email: string = "";
  password: string = "";

  loginUser(loginData: { email: string, password: string }) {

    this.ie = false;
    this.ip = false;

    this.email = loginData.email;
    this.password = loginData.password;

    if (this.email != "user@gmail.com") {
      this.route.navigateByUrl("userLogIn")
      this.ie = true;
      console.log("Invalid Email")
    }
    else if (this.password != "root") {
      this.route.navigateByUrl("userLogIn")
      this.ip = true;
      console.log("Invalid Password")
    }
    else {
      this.route.navigateByUrl("welcomeUser")
      console.log("Both are valid");
      this.loginService.userLoggedIn = true;
    }
  }
}
