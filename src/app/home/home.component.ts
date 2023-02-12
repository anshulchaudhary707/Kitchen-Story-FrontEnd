import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private foodService: FoodService, private route: Router) { }

  
}
