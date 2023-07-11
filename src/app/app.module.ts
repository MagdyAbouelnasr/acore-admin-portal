import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BooksComponent } from './components/books/books.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookDetailComponent } from './components/books/book-detail/book-detail.component';
import { BookItemComponent } from './components/books/book-list/book-item/book-item.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {NgConfirmModule} from 'ng-confirm-box';
import { AuthComponent } from './components/auth/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    BookItemComponent,
    SidebarComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgConfirmModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
