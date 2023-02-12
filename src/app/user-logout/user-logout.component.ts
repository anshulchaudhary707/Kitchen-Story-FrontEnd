import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private route: Router) { }

  ngOnInit(): void {
    this.loginService.userLoggedIn = false;
    setTimeout(() => {
      this.route.navigateByUrl("")
    }, 5000);
  }
}

