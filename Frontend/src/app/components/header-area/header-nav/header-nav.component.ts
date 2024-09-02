import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../models/product.model';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { loadCheckoutListSuccess } from '../../../store/checkout.state/checkout.actions';
import { getCheckoutProducts, getCheckoutProductsLength } from '../../../store/checkout.state/checkout.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [RouterLink,MatIconModule, CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {
  public checkoutListLength:Observable<number>

  constructor(private store:Store<AppState>){
    this.checkoutListLength = this.store.select(getCheckoutProductsLength)
  }
}
