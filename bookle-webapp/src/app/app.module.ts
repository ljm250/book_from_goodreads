import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookitemComponent } from './bookitem/bookitem.component';
import { BookService } from './services/book.service';
import { AuthorService } from './services/author.service';
import { CollectionService } from './services/collection.service';
import { ApicInterceptor } from './auth/apicInterceptor';
import { AuthenticationService } from './services/authentication.service';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AuthoritemComponent } from './authoritem/authoritem.component';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { AuthordetailComponent } from './authordetail/authordetail.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionlistComponent } from './collectionlist/collectionlist.component';
import { CollectionitemComponent } from './collectionitem/collectionitem.component';
import { CollectiondetailComponent } from './collectiondetail/collectiondetail.component';


@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookitemComponent,
    StatusBarComponent,
    LoginComponent,
    SearchComponent,
    BookdetailComponent,
    AuthoritemComponent,
    AuthorlistComponent,
    AuthordetailComponent,
    CollectionComponent,
    CollectionlistComponent,
    CollectionitemComponent,
    CollectiondetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    BookService,
    AuthorService,
    CollectionService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApicInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }