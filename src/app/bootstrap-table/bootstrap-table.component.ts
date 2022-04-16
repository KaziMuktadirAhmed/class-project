import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { book } from '../book';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-bootstrap-table',
  templateUrl: './bootstrap-table.component.html',
  styleUrls: ['./bootstrap-table.component.css']
})
export class BootstrapTableComponent implements OnInit {

  constructor(private bookSevice : ServiceNameService, private router: Router) { }

  books = this.bookSevice.getBooks();
  ngOnInit(): void {
    console.log("okay");
  }

  Delete (book : book) : void {
    console.log(book);
    this.books = this.bookSevice.deleteBook(book);
  }

  Update (givenBook : book, index:number) : void {
    this.bookSevice.setUpdateBook(givenBook, index);
    this.router.navigate(['update-book'])
  }

}
