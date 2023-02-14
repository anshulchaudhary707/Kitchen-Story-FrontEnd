import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private route: Router, private loginService: LoginService) { }

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
