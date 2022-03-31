import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../service-name.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private bookService: ServiceNameService) { }

  givenBook = this.bookService.getUpdateBook()

  ngOnInit(): void {
  }

  saveClick() : void {
    console.log(this.givenBook);
  }

}
