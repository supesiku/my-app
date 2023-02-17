import { Component, OnInit } from "@angular/core"
import { Book } from "../types/book"
import { BooksService } from "./books.service"
import { CartService } from "../cart/cart.service"
import { MsgService } from "../msg/msg.service"


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
  books:Book[] = []
  cart:Book[] = []
  sumPrice:number = 0
  f1:boolean=true
  f2:boolean=true
  f3:boolean=true

  n:string=""
  msg:string=""

  constructor(
    private msgService:MsgService, 
    private booksService:BooksService, 
    private cartService:CartService){
      this.books = booksService.getBooks()
  }
  hTst(){
    if(this.IsNumeric(this.n)){
      this.msg = this.msgService.getMsg(Number.parseInt(this.n))
      console.log(this.msg)
    }
  }

  hInp(e:any){
    alert(e.target.value)
  }

  addToCart(book:Book){
    //this.cart.push(book)
    this.sumPrice = this.cart.reduce((s,i)=>{return s+i.price},0)
    this.cartService.add(book)
    this.cart = this.cartService.cart
  }

  IsNumeric(s:string):boolean {
    var x = +s; // made cast obvious for demonstration
    return x.toString() === s;
  }
}
