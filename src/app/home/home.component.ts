import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string = "";

  constructor(private cartService: CartService, private loginService: LoginService) { }

  user: boolean = this.loginService.userLoggedIn
  admin: boolean = this.loginService.adminLoggedIn

  ngOnInit() {
    this.loginService.cameFromCart = false;
    if (this.cartService.itemAdded == true) {
      this.message = "Item Added to Cart";
      setTimeout(() => {
        this.message = "";
      }, 2000)
      this.cartService.itemAdded = false;
    }
  }
}
