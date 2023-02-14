import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FoodService } from '../food.service';
import { Product } from '../model/products';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})

export class AddFoodComponent implements OnInit {

  food: Product[] = [];
  searchedFood: Product[] = [];

  isFetching: boolean = false;
  @ViewChild('foodForm') form: NgForm;
  editMode: boolean = false;
  currentProductId: string;

  constructor(private foodService: FoodService, private route: Router) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  // add a food item
  addItem(foodData: Product) {
    if (this.editMode == false) {
      this.foodService.createProduct(foodData);
      this.form.setValue({
        name: "", price: "", type: "", nutrients: "", description: "", image: ""
      })
    }
    else {
      this.foodService.updateProduct(this.currentProductId, foodData);
    }
  }

  // fetch all product items
  private fetchProducts() {
    this.isFetching = true;
    this.foodService.fetchProducts().subscribe((res) => {
      console.log(res);
      this.food = res;
      this.isFetching = false;
    })
  }

  // delete a single product
  onDeleteProduct(id: string) {
    this.foodService.deleteProduct(id);
  }

  // delete all products
  deleteAllProducts() {
    this.foodService.deleteAllProducts();
    this.currentProductId = null;
    this.editMode = false;
    this.form.setValue({
      name: "", price: "", type: "", nutrients: "", description: "", image: ""
    })
  }

  // update a product
  updateProduct(id: string) {

    // get details of food item based on id
    let current_product = this.food.find((p) => {
      return p.id == id;
    })

    //populating the form with product details
    this.form.setValue({
      name: current_product.name,
      price: current_product.price,
      type: current_product.type,
      nutrients: current_product.nutrients,
      image: current_product.image,
      description: current_product.description
    });

    // changing the value of button upon clicking edit button
    this.editMode = true;
    this.currentProductId = id;
  }

  // turn off edit mode
  editModeFunction() {
    this.currentProductId = null;
    this.editMode = false;
    this.form.setValue({
      name: "", price: "", type: "", nutrients: "", description: "", Image: ""
    })
  }
}
