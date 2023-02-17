import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "src/app_1/app.component";
import { FormsModule } from "@angular/forms";
import { MsgService } from "src/app_1/books/msg.service"
import { MsgServiceJp } from "src/app_1/books/msg.service.jp"
import { BooksModule } from "./books/books.module";
import { BooksComponent } from "./books/books.component";

@NgModule(
  {
    imports: [BrowserModule, FormsModule, BooksModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    // providers: [{provide:MsgService, useClass:MsgServiceJp}]
  }
)

export class AppModule{}

