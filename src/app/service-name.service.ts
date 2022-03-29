import { Injectable } from '@angular/core';
import { book } from './book';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {
  books:book[] = [
    {id:1, name:"Physics", year:2015, availability:true},
    {id:2, name:"Mathmatics", year:2014, availability:true},
    {id:3, name:"Chemistry", year:2015, availability:true},
    {id:4, name:"Biology", year:2014, availability:true},
    {id:5, name:"Politics", year:2020, availability:false},
    {id:6, name:"Sociology", year:2021, availability:false}
  ]

  bookToBeUpdated:book = new book();

  constructor() { }

  getBooks() : book[] {
    return this.books
  }

  deleteBook (index: number): void {
    for(let i = 0; i < this.books.length; ++i){
      if (i == index) {
          this.books.splice(i,1);
      }
    }
  }

  setUpdateBook(setBook: book): void {
    this.bookToBeUpdated = setBook;
  }

  getUpdateBook() : book {
    return this.bookToBeUpdated;
  }
}
