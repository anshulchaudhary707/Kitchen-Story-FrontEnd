import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
    this.loginService.userLoggedIn = false;
    setTimeout(() => {
      this.route.navigateByUrl("")
    }, 2000);
  }
}

