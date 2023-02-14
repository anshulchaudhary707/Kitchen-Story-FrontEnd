import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { FoodService } from '../food.service';
import { LoginService } from '../login.service';
import { Product } from '../model/products';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {

  constructor(private foodService: FoodService, private route: Router, private cartService: CartService, private loginService: LoginService) { }

  food: Product[] = []
  searchedFood: Product[] = []
  noResultsFound: boolean = false;
  name: string = this.foodService.searchedItem;
  @ViewChild('searchForm') form: NgForm;
  fetching: boolean = false;

  ngOnInit() {
    this.foodService.fetchProducts()
      .subscribe((res) => {
        this.food = res;
        this.searchedFood = []
        this.searchedFood = this.food.filter((p) => {
          return p.name == this.foodService.searchedItem
        })
      })
  }

  add2Cart(item: Product) {
    this.foodService.fetchedItem = item;
    if (this.loginService.userLoggedIn == false) {
      this.loginService.cameFromCart = true;
      this.route.navigateByUrl("/userLogIn")
    }
    else {
      this.route.navigateByUrl("/add2Cart");
    }
  }

  searchItem(value: { name: string }) {
    this.fetching = true;
    this.foodService.fetchProducts()
      .subscribe((res) => {
        this.food = res;
        this.searchedFood = []
        this.searchedFood = this.food.filter(function (p) {
          return p.name == value.name
        })
        this.fetching = false;
        if (this.searchedFood.length == 0) {
          this.noResultsFound = true;
        } else {
          this.noResultsFound = false;
        }
        this.foodService.searchedItem = value.name;
      })
  }

  viewDetails(name: string) {
    this.route.navigateByUrl('/viewItem');
  }
}