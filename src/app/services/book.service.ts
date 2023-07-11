import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books.model';
// import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookSelected = new EventEmitter<Book>();

  private books: Book[] = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category: "Fiction",
      price: 19.99,
      pdf: new File([], "great-gatsby.pdf"),
      coverPhoto: new File([], "great-gatsby.jpg"),
      version: "1.0",
      isbn: "9781234567890",
      brief: "A story of love, greed, and the American Dream.",
    },
   {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      category: "Fiction",
      price: 15.99,
      pdf: new File([], "to-kill-a-mockingbird.pdf"),
      coverPhoto: new File([], "to-kill-a-mockingbird.jpg"),
      version: "2.0",
      isbn: "9780987654321",
      brief: "A classic tale of racial injustice and coming-of-age in the South.",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category: "Fiction",
      price: 12.99,
      pdf: new File([], "catcher-in-the-rye.pdf"),
      coverPhoto: new File([], "catcher-in-the-rye.jpg"),
      version: "1.5",
      olderVersion: "1.0",
      isbn: "9785678901234",
      brief: "A story of teenage angst and alienation in post-war America.",
    },
    {
      title: "1984",
      author: "George Orwell",
      category: "Fiction",
      price: 14.99,
      pdf: new File([], "1984.pdf"),
      coverPhoto: new File([], "1984.jpg"),
      version: "1.0",
      isbn: "9780123456789",
      releaseDate: new Date("1949-06-08"),
      brief: "A dystopian novel depicting a totalitarian regime and thought control.",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Fiction",
      price: 11.99,
      pdf: new File([], "pride-and-prejudice.pdf"),
      coverPhoto: new File([], "pride-and-prejudice.jpg"),
      version: "2.0",
      olderVersion: "1.0",
      edition: "Revised Edition",
      isbn: "9785432109876",
      brief: "A classic romantic novel exploring themes of love, marriage, and societal expectations.",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Fiction",
      price: 11.99,
      pdf: new File([], "pride-and-prejudice.pdf"),
      coverPhoto: new File([], "pride-and-prejudice.jpg"),
      version: "2.0",
      olderVersion: "1.0",
      edition: "Revised Edition",
      isbn: "978543210987@",
      brief: "A classic romantic novel exploring themes of love, marriage, and societal expectations.",
    },
  ];

  // private books: Book[];



  constructor(private http: HttpClient) { }

  // setBooks(books: Book[]): void {
  //   this.books = books;
  // }


  getBooks(){
    return this.books.slice();
  }

  getBookById(isbn: string): Book | undefined {
    return this.books.find(book => book.isbn === isbn);
  }
  addBook(book: Book){
    this.books.push(book);
    // this.dataStorage.storeBooks(this.books);
  }

  deleteBook(isbn: string): void {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      this.books.splice(index, 1);
      // this.dataStorage.storeBooks(this.books);
    }
  }


  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.isbn === updatedBook.isbn);
    if (index !== -1) {
      this.books[index] = updatedBook;
      // this.dataStorage.storeBooks(this.books);

    }
  }


  // GetBooks():Observable<Book[]>{
  //   return this.http.get<Book[]>(``)
  // }
}
