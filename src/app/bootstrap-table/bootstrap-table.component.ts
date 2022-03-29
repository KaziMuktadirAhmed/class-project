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
    const index = this.books.indexOf(book);
    this.bookSevice.deleteBook(index);
  }

  Update (givenBook : book) : void {
    const index = this.books.indexOf(givenBook);
    this.bookSevice.setUpdateBook(givenBook);
    this.router.navigate(['update-book'])
  }

}
