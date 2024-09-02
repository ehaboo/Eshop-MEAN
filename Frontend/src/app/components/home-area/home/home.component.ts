import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductModel } from '../../../models/product.model';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { loadProducts, loadProductsSuccess } from '../../../store/products.state/products.actions';
import { getProducts } from '../../../store/products.state/products.selectors';
import { AppState } from '../../../store/app.state';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  public products$:Observable<ProductModel[]>; 

  public constructor(
    private productsService:ProductsService,
    private store:Store<AppState>
  ) {
    this.products$ = this.store.select(getProducts)
    
  }


   ngOnInit():void {
     try {
        this.store.dispatch(loadProducts())      
    } catch (error:any) {
      console.log(error.message);
    }
  }

}
