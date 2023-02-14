import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FoodService } from '../food.service';
import { LoginService } from '../login.service';
import { Product } from '../model/products';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  constructor(private foodService: FoodService, private route: Router, private cartService: CartService, private loginService: LoginService) { }

  food: Product[] = [];
  isFetching: boolean = false;
  message: string = "";

  ngOnInit(): void {
    this.fetchProducts();
    if (this.cartService.itemAdded == true) {
      this.message = "Item Added to Cart";
      setTimeout(() => {
        this.message = "";
      }, 2000)
      this.cartService.itemAdded = false;
    }
  }

  private fetchProducts() {
    this.isFetching = true;
    this.foodService.fetchProducts().subscribe((res) => {
      this.food = res;
      this.isFetching = false;
    })
  }

  addToCart(item: Product) {
    this.foodService.fetchedItem = item;
    this.cartService.cameFromAll = true;
    if (this.loginService.userLoggedIn == false) {
      this.loginService.cameFromCart = true;
      this.route.navigateByUrl("/userLogIn")
    }
    else {
      this.route.navigateByUrl("/add2Cart");
    }
  }
}
