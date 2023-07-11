import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/books.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  selectedImage: string = null;
  selectedFile: File = null;
  isFileUploaded: boolean = false;

  populated = false;
////////////////////////////////
  book: Book = {
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

// book: Book = new Book();
  currentBookId :any;

  private routeSub: Subscription;
  constructor(private router: Router, private bookService: BookService, private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
      // this.bookService.bookSelected.subscribe((book: Book) => {
      //   this.book = book;
      //   console.warn(book , 'book')
      // })
      // console.warn(this.book , 'book')

      this.routeSub = this.route.params.subscribe(params => {
        if(params['isbn']){
          this.book = this.bookService.getBookById(params['isbn'])
          this.currentBookId = params['isbn']
        }
      });

      if(this.book.isbn != ''){
        this.populated = true
      }


  }

  handleFileChange(event){
    this.selectedFile = <File>event.target.files[0];
    this.isFileUploaded = true;
  }

  handleCoverPhotoChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result.toString();
      };
      reader.readAsDataURL(file);
    }
  }


  cancel(): void {
    this.router.navigate(['home']);
  }

  saveBook(frm: NgForm) {
    if (frm.invalid ||
        this.book.title == '' ||
        this.book.author == '' ||
        this.book.category == '' ||
        this.book.price == 0 ||
        this.book.pdf == null ||
        this.book.coverPhoto == null ||
        this.book.version == '' ||
        this.book.isbn == '' ||
        this.book.brief == '') {
      return;
    }

    const newBook: Book = {
      title: frm.value.bookTitle,
      author: frm.value.bookAuthor,
      category: frm.value.bookCategory,
      price: frm.value.bookPrice,
      pdf: frm.value.bookPdf,
      coverPhoto: frm.value.bookCoverPhoto,
      version: frm.value.bookVersion,
      olderVersion: frm.value.bookOlderVersion,
      edition: frm.value.bookEdition,
      isbn: frm.value.bookISBN,
      releaseDate: frm.value.bookReleaseDate,
      brief: frm.value.bookBrief
    };

    this.populated ? this.bookService.updateBook(this.currentBookId) : this.bookService.addBook(newBook);


    this.router.navigate(['home']);

}
}
