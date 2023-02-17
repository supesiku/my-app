import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  exports: [CartComponent],
  declarations: [CartComponent],
  providers: [CartService],
})
export class CartModule { }
