import { createReducer, on } from "@ngrx/store";
import { initialState } from "./products.state";
import {  loadProducts, loadProductsSuccess } from "./products.actions";


export const productsReducer = createReducer(
    initialState, 
    on(loadProducts, (state) =>({...state})
    ),
    on(loadProductsSuccess, (state, {productsList}) => ({...state,productsList})
    )
)
