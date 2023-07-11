import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  filterValue!: any

  constructor(private router:Router){

  }

  FilterChange(data: Event){
     this.filterValue = (data.target as HTMLInputElement).value
  }


  PreviewBookAdd(){
    this.router.navigate(['addBook']);
  }
}
