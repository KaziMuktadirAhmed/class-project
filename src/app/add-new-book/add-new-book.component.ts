import { Component, OnInit } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { Router } from '@angular/router';
import { book } from '../book';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  constructor(private bookService:ServerModule, private router:Router) { }

  newBook : book = new book()

  ngOnInit(): void {
  }


  AddBook():void{
    console.log(this.newBook);
  }
}
