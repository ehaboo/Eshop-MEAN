import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { productsReducer } from './store/products.state/products.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './store/products.state/products.effects';
import { checkoutReducer } from './store/checkout.state/checkout.reducer';


export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState({name:'products', reducer: productsReducer}),
    provideState({name: 'checkout', reducer:checkoutReducer}),
    provideEffects(ProductsEffects),
    provideStoreDevtools({maxAge: false , logOnly:false})
  ],
  productsUrl: "http://localhost:4000/api/products"
};
