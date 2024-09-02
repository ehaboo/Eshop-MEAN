import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { ProductModel } from "../../models/product.model";
import { AppState } from "../app.state";
import { state } from "@angular/animations";
import { ProductsStateInterface } from "./products.state";


// const getProductsState = createFeatureSelector<ProductModel[]>('productsList');

// export const getProducts = createSelector(getProductsState, (state)=> {
//     return state
// })

export const selectProductsState = (state:AppState) => state.products;
export const getProducts = createSelector(
    selectProductsState,
    (state:ProductsStateInterface) => state.productsList
) 