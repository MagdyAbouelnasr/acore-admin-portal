import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { BookItemComponent } from './components/books/book-list/book-item/book-item.component';
import { AuthComponent } from './components/auth/auth/auth.component';

const routes: Routes = [
  { path:'', component: AuthComponent },
  {
    path: 'home', component: BooksComponent
  },
  {
    path: 'bookDetails/:isbn', component: BookDetailComponent
  },
  {
    path: 'editBook/:isbn', component: BookItemComponent
  },
  {
    path: 'addBook', component: BookItemComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
