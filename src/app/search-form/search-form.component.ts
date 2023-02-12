import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Product } from '../model/products';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  constructor(private foodService: FoodService) { }

  food: Product[] = []
  searchedFood: Product[] = []

  searchItem(value: { name: string }) {
    this.foodService.fetchProducts()
      .subscribe((res) => {
        this.food = res;
        this.searchedFood = []
        this.searchedFood = this.food.filter(function (p) {
          return p.name == value.name
        })
        this.foodService.searchedItem = value.name;
        console.log(this.foodService.searchedItem)
      })
  }
}
