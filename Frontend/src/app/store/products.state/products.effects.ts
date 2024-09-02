import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsService } from "../../services/products.service";
import { LOAD_PRODUCTS, loadProducts, loadProductsSuccess } from "./products.actions";
import { catchError, EMPTY, exhaustMap, map, mergeMap } from "rxjs";


@Injectable() 
export class ProductsEffects{
    
    constructor(private action$:Actions, private productsService:ProductsService){

    }

    products$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadProducts),
            mergeMap(() => this.productsService.getAllProducts()
            .pipe(
                    map((data) =>  loadProductsSuccess({productsList:data})),
                    catchError(() => EMPTY)
                )
            )
        )
    )

}