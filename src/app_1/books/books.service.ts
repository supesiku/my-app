import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [{name:"Clean Code",author:"Tom",price:1900},
            {name:"Dirty deal",author:"D'arby",price:260}]
  }
}
