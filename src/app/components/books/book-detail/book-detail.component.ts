import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/books.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  selectedBook: Book = {
    title: '',
    author: '',
    category: '',
    price: 0,
    pdf: null,
    coverPhoto: null,
    version: '',
    olderVersion: '',
    edition: '',
    isbn: '',
    releaseDate: null,
    brief: ''
  };

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router ,private confirmService: NgConfirmService) {}
  private routeSub: Subscription;

  bookId: any;

  ngOnInit(): void {
    // this.bookService.bookSelected.subscribe((book: Book) => {
    //   this.selectedBook = book;
    // });


    this.routeSub = this.route.params.subscribe(params => {
      if(params['isbn']){
        this.selectedBook = this.bookService.getBookById(params['isbn'])
        this.bookId = params['isbn'];
      }
    });
  }




  EditBook(){
    let url = 'editBook/:isbn';
    url = url.replace(':isbn', String(this.bookId));
    this.router.navigate([url]);

    //in future updates when i go to edit from here... on edit cancel i should get back here not home page
  }


  DeleteBook(){
    this.confirmService.showConfirm("Are you sure want to Delete?",
    () => {
     // Yes logic
     this.bookService.deleteBook(String(this.bookId));
     this.router.navigate(['home']);

   },
   () => {
     //No logic
   })
  }


}
