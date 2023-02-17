import { Component,Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book:Book = {} as Book
  @Output() addtoCartEmitter = new EventEmitter<Book>()

  handleAddCart(){
    //alert(this.book.price)
    this.addtoCartEmitter.emit(this.book)
  }

  itvl:any = null
  constructor(){
    console.log("BOOK constructor");
  }
  ngOnInit(): void {
    console.log("BOOK ngOnInit");
    // this.itvl = setInterval(()=>{
    //   console.log(`hello this is ${this.book.author}`);
    // }, 1000)
  }
  ngOnDestroy(): void {
    console.log("BOOK ngOnDestroy");
    if(this.itvl !== null) clearInterval(this.itvl)
  }

}
