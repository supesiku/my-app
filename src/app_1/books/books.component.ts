import { Component, OnInit } from "@angular/core"
import { Book } from "../types/book"
import { BooksService } from "./books.service"


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books:Book[] = []
  cart:Book[] = []
  sumPrice:number = 0
  f1:boolean=true
  f2:boolean=true
  f3:boolean=true

  constructor(private booksService:BooksService){
    this.books = this.booksService.getBooks()
  }
  ngOnInit(): void {
    
  }

  addToCart(e:Book){
    this.cart.push(e)
    this.sumPrice = this.cart.reduce((s,e)=>{return s + e.price}, 0)
  }

}
