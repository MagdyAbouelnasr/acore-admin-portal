// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BookService } from './book.service';
// import { Book } from '../models/books.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataStorageService {

//   constructor(private http: HttpClient) { }


//   storeBooks(books: Book[]){
//     this.http.put('https://trianglz-book-store-default-rtdb.firebaseio.com/books.json', books).subscribe(res => {
//       console.log(res);

//     });
//   }

//   fetchBooks(): Book[]{
//     let booksReturn: Book[] = [];
//     this.http.get<Book[]>('https://trianglz-book-store-default-rtdb.firebaseio.com/books.json').subscribe(books => {
//       booksReturn = books;
//     })
//     return booksReturn;
//   }

// }
