import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if (this.cartService.cameFromView == true) {
      this.cartService.add2Cart1();
    }
    else if (this.cartService.cameFromAll == true) {
      this.cartService.add2Cart2()
    }
    else {
      this.cartService.add2Cart();
    }
  }

}
