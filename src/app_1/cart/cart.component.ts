import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  constructor(
    private cartService:CartService){}

  getCart():Book[]{
    return this.cartService.get()
  }
  cancel(index:number){
    this.cartService.del(index)
  }
}
