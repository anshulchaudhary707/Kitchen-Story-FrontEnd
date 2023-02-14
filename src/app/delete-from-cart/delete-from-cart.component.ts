import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-delete-from-cart',
  templateUrl: './delete-from-cart.component.html',
  styleUrls: ['./delete-from-cart.component.css']
})
export class DeleteFromCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    if (this.cartService.allDelete == true) {
      this.cartService.deleteEverything();
      this.cartService.allDelete = false;
    }
    if (this.cartService.singleDelete == true) {
      this.cartService.delete(this.cartService.id);
      this.cartService.singleDelete = false;
    }
  }
}
