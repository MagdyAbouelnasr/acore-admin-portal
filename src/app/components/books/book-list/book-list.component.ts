import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { Book } from 'src/app/models/books.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnChanges {
  @Input() filterBy: any;

  bookList: Book[];
  dataSource: MatTableDataSource<Book>;
  displayedColumns: string[] = ['title', 'category', 'author', 'isbn', 'version', 'Actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bookService: BookService, private router: Router, private confirmService: NgConfirmService) {
    this.bookList = [];
    this.dataSource = new MatTableDataSource<Book>(this.bookList);
  }

  ngOnInit(): void {
    this.pageInitialize()
  }

  pageInitialize(){
    this.bookList = this.bookService.getBooks();
    this.dataSource.data = this.bookList;

    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.paginator.length = this.dataSource.data.length;
    }, 0);
  }


  ngOnChanges(): void {
    this.FilterChange();
  }

  FilterChange(): void {
    this.dataSource.filter = this.filterBy;
  }

  PreviewBookDetail(row: any): void {
    this.bookService.bookSelected.emit(row);

    let url = 'bookDetails/:isbn';
    url = url.replace(':isbn', String(row.isbn));
    this.router.navigate([url]); // Pass the URL as an array
  }

  PreviewBookEdit(row: any): void {
    this.bookService.bookSelected.emit(row);

    console.log('emit valurt', row)

    let url = 'editBook/:isbn';
    url = url.replace(':isbn', String(row.isbn));
    this.router.navigate([url]);
  }

  DeleteBook(row: any): void {
    // this.bookService // confirm first
    this.confirmService.showConfirm("Are you sure want to Delete?",
     () => {
      // Yes logic
      this.bookService.deleteBook(String(row.isbn));
      this.pageInitialize()

    },
    () => {
      //No logic
    })


  }
}
