import { Component, OnInit } from '@angular/core';
// import { ServerModule } from '@angular/platform-server';
import { Router } from '@angular/router';
import { book } from '../book';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {

  constructor(private bookService:ServiceNameService, private router:Router) { }

  newBook : book = new book()

  ngOnInit(): void {
  }

  AddBook():void{
    console.log(this.newBook);
    this.bookService.addBook(this.newBook);
    this.router.navigate(['books']);
  }
}
