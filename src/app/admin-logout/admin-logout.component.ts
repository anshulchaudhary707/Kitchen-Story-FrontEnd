import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private loginService: LoginServiceService, private route: Router) { }

  ngOnInit(): void {
    this.loginService.adminLoggedIn = false;
    setTimeout(() => {
      this.route.navigateByUrl("")
    }, 5000);
  }
}
