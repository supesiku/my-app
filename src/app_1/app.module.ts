import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BooksComponent } from "src/app_1/books/books.component";
import { BookComponent } from "src/app_1/book/book.component";
import { AppComponent } from "src/app_1/app.component";
import { FormsModule } from "@angular/forms";

@NgModule(
  {
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, BooksComponent, BookComponent],
    bootstrap: [AppComponent]
  }
)

export class AppModule{}

