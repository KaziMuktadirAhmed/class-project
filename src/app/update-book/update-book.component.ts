import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../service-name.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private bookService: ServiceNameService, private router:Router) { }

  givenBook = this.bookService.getUpdateBook()

  ngOnInit(): void {
  }

  saveClick() : void {
    this.bookService.updateBook(this.givenBook);
    console.log(this.givenBook);
    this.router.navigate(['books']);
  }

}
