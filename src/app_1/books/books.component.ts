import { Component, OnInit } from "@angular/core"
import { Book } from "../types/book"
import { BooksService } from "./books.service"
import { MsgService } from "./msg.service"


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

  n:string=""
  msg:string=""

  constructor(private msgService:MsgService){
  }
  ngOnInit(): void {}
  hTst(){
    if(this.IsNumeric(this.n)){
      this.msg = this.msgService.getMsg(Number.parseInt(this.n))
      console.log(this.msg)
    }
  }

  hInp(e:any){
    alert(e.target.value)
  }

  addToCart(e:Book){
    this.cart.push(e)
    this.sumPrice = this.cart.reduce((s,e)=>{return s + e.price}, 0)
  }

  IsNumeric(s:string):boolean {
    var x = +s; // made cast obvious for demonstration
    return x.toString() === s;
  }
}
