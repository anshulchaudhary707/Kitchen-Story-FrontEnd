import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FoodService } from '../food.service';
import { LoginService } from '../login.service';
import { Product } from '../model/products';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  constructor(private foodService: FoodService, private loginService: LoginService, private cartService: CartService, private route: Router) { }

  food: Product[] = [];
  searchedFood: Product[] = [];
  message: string = "";
  item1: Product = this.searchedFood[0];

  ngOnInit(): void {
    this.foodService.fetchProducts()
      .subscribe((res) => {
        this.food = res;
        this.searchedFood = this.food.filter((p) => {
          return p.name === this.foodService.searchedItem
        })
        this.item1 = this.searchedFood[0];
      })
    if (this.cartService.itemAdded) {
      this.message = "Item Added To Cart.. "
      setTimeout(() => {
        this.message = "";
      }, 3000)
      this.cartService.itemAdded = false;
    }
  }
  add2Cart(item: Product) {
    this.foodService.fetchedItem = item;
    this.cartService.cameFromView = true;
    if (this.loginService.userLoggedIn == false) {
      this.loginService.cameFromCart = true;
      this.route.navigateByUrl("/userLogIn")
    }
    else {
      this.route.navigateByUrl("/add2Cart");
    }
  }
}
