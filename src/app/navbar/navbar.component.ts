import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginServiceService) { }

  userLI: boolean = this.loginService.userLoggedIn;
  adminLI: boolean = this.loginService.adminLoggedIn;

  ngOnInit(): void {
    this.userLI = this.loginService.userLoggedIn;
    this.adminLI = this.loginService.adminLoggedIn;
    if (this.userLI == true) {
      console.log("User is Logged In")
    }
    else {
      console.log("User is not Logged In")
    }
    if (this.adminLI == true) {
      console.log("Admin is Logged In")
    }
    else {
      console.log("Admin is not Logged In")
    }
  }
}