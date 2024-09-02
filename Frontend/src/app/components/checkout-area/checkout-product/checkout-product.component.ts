import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../../models/product.model';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { deleteCheckoutProductSuccess } from '../../../store/checkout.state/checkout.actions';

@Component({
  selector: 'app-checkout-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './checkout-product.component.html',
  styleUrl: './checkout-product.component.css'
})
export class CheckoutProductComponent {

  @Input()
  public product:ProductModel;

  constructor(private store:Store<AppState>){}

  public handleClick() {
    this.store.dispatch(deleteCheckoutProductSuccess({checkoutProduct:this.product}))
  }

}
