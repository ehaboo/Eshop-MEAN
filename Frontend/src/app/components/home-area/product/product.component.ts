import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { addCheckoutProductSuccess } from '../../../store/checkout.state/checkout.actions';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private store:Store<AppState>){}

  @Input()
  public product:ProductModel; 

 public handleClick() {
  this.store.dispatch(addCheckoutProductSuccess({checkoutProduct:this.product}))
}
  
}
