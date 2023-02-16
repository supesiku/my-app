import { Component } from "@angular/core"
import { Book } from "../types/book"


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent{
  books:Book[] = [{name:"Clean Code",author:"Tom",price:1900},
                  {name:"Dirty deal",author:"D'arby",price:260}]
  cart:Book[] = []

  sumPrice:number = 0

  f1:boolean=true
  f2:boolean=true
  f3:boolean=true

  addToCart(e:Book){
    this.cart.push(e)
    this.sumPrice = this.cart.reduce((s,e)=>{return s + e.price}, 0)
  }
}
