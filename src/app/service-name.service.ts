import { NONE_TYPE } from '@angular/compiler';
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
  updateBookIndex:number = -1;

  constructor() { }

  getBooks() : book[] {
    return JSON.parse(JSON.stringify(this.books));
  }

  deleteBook (givenBook: book): book[] {
    this.books = this.books.filter((book) => givenBook.id != book.id);
    return this.books;
  }

  updateBook(book:book) : void {
    this.books.splice(this.updateBookIndex, 1, book);
  }

  addBook(book:book) : void {
    this.books.push(book);
  }

  setUpdateBook(setBook: book, index:number): void {
    this.bookToBeUpdated = setBook;
    this.updateBookIndex = index
  }

  getUpdateBook() : book {
    return this.bookToBeUpdated;
  }
}
