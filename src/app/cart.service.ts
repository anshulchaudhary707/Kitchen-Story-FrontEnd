import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { FoodService } from './food.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private foodService: FoodService, private loginService: LoginService, private route: Router) { }

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

  itemAdded: boolean = false;
  cameFromView: boolean = false;
  cameFromAll: boolean = false;
  singleDelete: boolean = false;
  allDelete: boolean = false;
  id: string = null;

  add2Cart() {
    if (this.foodService.fetchedItem != null) {
      this.http.post('https://angular-kitchen-story-default-rtdb.firebaseio.com/add2Cart.json', this.foodService.fetchedItem)
        .subscribe((res) => {
          console.log("Item Added: ")
          console.log(res);
          this.foodService.fetchedItem = null;
          this.itemAdded = true;
          this.route.navigateByUrl("/");
        })
    } else {
      console.log("Contains Null");
    }
  }

  add2Cart1() {
    if (this.foodService.fetchedItem != null) {
      this.http.post('https://angular-kitchen-story-default-rtdb.firebaseio.com/add2Cart.json', this.foodService.fetchedItem)
        .subscribe((res) => {
          console.log("Item Added: ")
          console.log(res);
          this.foodService.fetchedItem = null;
          this.itemAdded = true;
          this.cameFromView = false;
          this.route.navigateByUrl("/viewItem");
        })
    } else {
      console.log("Contains Null");
    }
  }
  add2Cart2() {
    if (this.foodService.fetchedItem != null) {
      this.http.post('https://angular-kitchen-story-default-rtdb.firebaseio.com/add2Cart.json', this.foodService.fetchedItem)
        .subscribe((res) => {
          console.log("Item Added: ")
          console.log(res);
          this.foodService.fetchedItem = null;
          this.itemAdded = true;
          this.cameFromAll = false;
          this.route.navigateByUrl("/viewAllProducts");
        })
    } else {
      console.log("Contains Null");
    }
  }
  fetchCart() {
    return this.http.get('https://angular-kitchen-story-default-rtdb.firebaseio.com/add2Cart.json')
      .pipe(map((res) => {

        const products = [];

        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            products.push({ cid: key, ...res[key] })
          }
        }
        return products;
      }))
  }

  delete(id: string) {
    if (id != null) {
      this.http.delete('https://angular-kitchen-story-default-rtdb.firebaseio.com/add2Cart/' + id + '.json').subscribe(() => {
        this.route.navigateByUrl("/viewCart");
        this.id = null;
      });
    }
  }

  deleteEverything() {
    this.http.delete('https://angular-kitchen-story-default-rtdb.firebaseio.com/add2Cart.json').subscribe(() => {
      this.route.navigateByUrl("/viewCart");
    });
  }

  deleteEverything1() {
    this.http.delete('https://angular-kitchen-story-default-rtdb.firebaseio.com/add2Cart.json').subscribe(() => {
      setTimeout(() => {
        this.route.navigateByUrl("/");
      }, 5000)
    });
  }

  purchaseAll() {
    this.fetchCart().subscribe((res) => {
      console.log(res);
      this.fetched = res;
      console.log(this.fetched);
      this.http.post('https://angular-kitchen-story-default-rtdb.firebaseio.com/purchased.json', this.fetched).subscribe();
    })
  }
}