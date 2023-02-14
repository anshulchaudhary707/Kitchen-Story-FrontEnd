import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent implements OnInit {

  constructor(private cartService: CartService, private route: Router) { }

  cartItems: {
    cid?: string,
    id: string;
    name: string;
    price: string;
    type: string;
    nutrients: string;
    description: string;
    image: string;
  }[] = [];

  isFetching: boolean = false;
  totalPrice: number = 0;

  ngOnInit(): void {
    this.fetchCart();
    console.log("From Confirmation Page")
  }

  fetchCart() {
    this.isFetching = true;
    this.cartService.fetchCart().subscribe((res) => {
      console.log(res);
      this.cartItems = res;
      this.calculatePrice();
      this.isFetching = false;
      console.log(this.cartItems);
    })
  }
  calculatePrice() {
    for (let i = 0; i < this.cartItems.length; i++) {
      this.totalPrice += Number(this.cartItems[i].price);
    }
  }
  yes() {
    this.route.navigateByUrl("/allOrderPlaced")
  }
  no() {
    this.route.navigateByUrl("/viewCart");
  }
}
