import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Product } from '../model/products';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  constructor(private foodService: FoodService) { }

  food: Product[] = [];

  ngOnInit(): void {
    this.foodService.fetchProducts()
      .subscribe((res) => {
        this.food = res;
        console.log(res);
      })
  }
}
