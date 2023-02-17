import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceJp {

  constructor() { }

  getMsg(n:number):string{
    let s:string = ""
    switch(n) 
    {
      case 0: s = "これはペンです。"; break;
      case 1: s = "私は水を飲むのが好きです。"; break;
      default: s = "なんでもない。"
    }
    return s
  }
}
