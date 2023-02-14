import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './model/products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  searchedFood: Product;

  searchedItem: string = "";

  fetchedItem: Product = null;

  // add a product
  createProduct(foodData: Product) {

    console.log(foodData);
    this.http.post<{ name: string }>('https://angular-kitchen-story-default-rtdb.firebaseio.com/products.json', foodData)
      .subscribe((res) => {
        console.log(res);
      }
      )
  }

  // fetch all products
  fetchProducts() {
    return this.http.get<{ [key: string]: Product }>('https://angular-kitchen-story-default-rtdb.firebaseio.com/products.json')
      .pipe(map((res) => {

        const products = [];

        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            products.push({ id: key, ...res[key] })
          }
        }
        return products;
      }))
  }

  // delete a product
  deleteProduct(id: string) {
    this.http.delete('https://angular-kitchen-story-default-rtdb.firebaseio.com/products/' + id + '.json')
      .subscribe();
  }

  // delete all products
  deleteAllProducts() {
    this.http.delete('https://angular-kitchen-story-default-rtdb.firebaseio.com/products.json')
      .subscribe();
  }

  //update a product
  updateProduct(id: string, value: Product) {
    this.http.put('https://angular-kitchen-story-default-rtdb.firebaseio.com/products/' + id + '.json', value).subscribe();
  }
}
