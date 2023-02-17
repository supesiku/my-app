import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }

  getMsg (n:number):string{
    let s:string = ""
    switch(n) 
    {
      case 0: s = "This is a pen."; break;
      case 1: s = "I like to drink water."; break;
      default: s = "Never mind."
    }
    return s
  }
}
