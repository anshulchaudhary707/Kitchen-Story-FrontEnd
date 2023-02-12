import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private loginService: LoginServiceService, private route: Router) { }

  title: string = "Admin Log In Form"
  ie: boolean = false;
  ip: boolean = false;


  email: string = "";
  password: string = "";

  loginAdmin(loginData: { email: string, password: string }) {
    this.email = loginData.email;
    this.password = loginData.password;
    this.ie = false;
    this.ip = false;
    if (this.email != "admin@gmail.com") {
      this.route.navigateByUrl("adminLogIn")
      this.ie = true;
      console.log("Invalid Email")
    }
    else if (this.password != "root") {
      this.route.navigateByUrl("adminLogIn")
      this.ip = true;
      console.log("Invalid Password")
    }
    else {
      this.route.navigateByUrl("welcomeAdmin")
      console.log("Both are valid");
      this.loginService.adminLoggedIn = true;
    }
  }
}
