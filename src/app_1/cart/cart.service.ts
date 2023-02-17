import { Injectable } from '@angular/core';
import { Book } from 'src/app_1/types/book';

@Injectable()
export class CartService {
  cart:Book[] = []

  add(item:Book){
    this.cart.push(item)
  }
  get(){
    return this.cart
  }
  del(index:number){
    console.log(JSON.stringify(this.cart))
    this.cart.splice(index,1)
    console.log(JSON.stringify(this.cart))
  }
}
