import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-order-placed',
  templateUrl: './all-order-placed.component.html',
  styleUrls: ['./all-order-placed.component.css']
})
export class AllOrderPlacedComponent {

  constructor(private cartService: CartService) { }

  cartItems: {
    cid?: string,
    id: string;
    name: string;
    price: string;
    type: string;
    nutrients: string;
    description: string;
    image: string;
  }[] = [];

  isFetching: boolean = false;
  totalPrice: number = 0;

  ngOnInit(): void {
    this.fetchCart();
  }

  fetchCart() {
    this.isFetching = true;
    this.cartService.fetchCart().subscribe((res) => {
      this.cartItems = res;
      this.calculatePrice();
      this.cartService.deleteEverything1();
      this.isFetching = false;
    })
  }
  calculatePrice() {
    for (let i = 0; i < this.cartItems.length; i++) {
      this.totalPrice += Number(this.cartItems[i].price);
    }
  }
}
