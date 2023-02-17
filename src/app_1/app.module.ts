import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "src/app_1/app.component";
import { FormsModule } from "@angular/forms";
import { MsgService } from "src/app_1/msg/msg.service"
import { MsgServiceJp } from "src/app_1/msg/msg.service.jp"
import { BooksModule } from "./books/books.module";
import { CartModule } from "./cart/cart.module";
import { AppRoutingModule } from "src/app_1/app-routing.module";

@NgModule(
  {
    imports: [BrowserModule, FormsModule, BooksModule, CartModule, AppRoutingModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    // providers: [{provide:MsgService, useClass:MsgServiceJp}]
  }
)

export class AppModule{}

