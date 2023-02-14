import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit(): void {
    this.loginService.adminLoggedIn = false;
    setTimeout(() => {
      this.route.navigateByUrl("")
    }, 2000);
  }
}
