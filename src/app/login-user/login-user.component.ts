import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  constructor(private route: Router, private loginService: LoginService, private cartService: CartService) { }

  title: string = "User Log In Form"
  ie: boolean = false;
  ip: boolean = false;

  lif: boolean = this.loginService.cameFromCart;

  email: string = "";
  password: string = "";

  loginUser(loginData: { email1: string, password1: string }) {

    this.ie = false;
    this.ip = false;

    this.email = loginData.email1;
    this.password = loginData.password1;

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
      if (this.loginService.cameFromCart == true) {
        console.log("Logged In Before Adding To Cart.");
        this.route.navigateByUrl("/add2Cart")
        this.loginService.cameFromCart = false;
        this.loginService.userLoggedIn = true;
      } else {
        console.log("Logged In Directly.");
        this.loginService.userLoggedIn = true;
        this.route.navigateByUrl("/")
      }
    }
  }

}
