import { Component, OnInit } from '@angular/core';
import { SubtotalComponent } from "../subtotal/subtotal.component";
import { ProductModel } from '../../../models/product.model';
import { CheckoutProductComponent } from "../checkout-product/checkout-product.component";
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { Observable } from 'rxjs';
import { getCheckoutProducts } from '../../../store/checkout.state/checkout.selectors';
import { loadCheckoutList } from '../../../store/checkout.state/checkout.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [SubtotalComponent, CheckoutProductComponent, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  
  public products$:Observable<ProductModel[]>; 

  constructor(private store:Store<AppState>){
    this.products$ = this.store.select(getCheckoutProducts)
    
    
  }
  
  ngOnInit(): void {
    try {
      this.store.dispatch(loadCheckoutList())      
  } catch (error:any) {
    console.log(error.message);
  }
  }



}
