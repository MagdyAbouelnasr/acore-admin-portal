import { Component, OnInit } from '@angular/core';
// import { DataStorageService } from './services/data-storage.service';
import { BookService } from './services/book.service';
import { Book } from './models/books.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(){
    // const books: Book[]=this.dataStorageService.fetchBooks();
    // this.bookService.setBooks(books);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'acore-admin-portal';

  sideBarOpen = true;


  toggleSideBar(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
