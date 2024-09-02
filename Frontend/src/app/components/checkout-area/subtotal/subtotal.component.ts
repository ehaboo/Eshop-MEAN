import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { getCheckoutProductsLength, getSumPrices } from '../../../store/checkout.state/checkout.selectors';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subtotal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtotal.component.html',
  styleUrl: './subtotal.component.css'
})
export class SubtotalComponent  {
  public checkoutListLength:Observable<number>
  public value$:Observable<number>

  constructor(private store:Store<AppState>){
    this.checkoutListLength = this.store.select(getCheckoutProductsLength);
    this.value$ = this.store.select(getSumPrices)
  }

  

}
