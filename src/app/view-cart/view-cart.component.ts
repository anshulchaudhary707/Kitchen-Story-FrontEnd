import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../model/products';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  constructor(private cartService: CartService, private route: Router) { }

  fetched: {
    cid?: string,
    id: string;
    name: string;
    price: string;
    type: string;
    nutrients: string;
    description: string;
    image: string;
  }[] = [];

  ngOnInit(): void {
    this.fetchCart();
  }

  isFetching: boolean = false;
  showPurchase: boolean = false;

  fetchCart() {
    this.isFetching = true;
    this.cartService.fetchCart().subscribe((res) => {
      console.log(res);
      this.fetched = res;
      this.isFetching = false;
      console.log(this.fetched);
    })
  }

  delete(id: string) {
    console.log("Id pressed: " + id);
    this.cartService.singleDelete = true;
    this.cartService.allDelete = false;
    this.cartService.id = id;
    this.route.navigateByUrl("/deleteFromCart");
  }

  deleteEverything() {
    this.cartService.singleDelete = false;
    this.cartService.allDelete = true;
    this.route.navigateByUrl("/deleteFromCart");
  }

  purchaseAll() {
    this.showPurchase = true;
    console.log("Purchased Clicked");
    this.route.navigateByUrl('/confirmPage');
  }

}
