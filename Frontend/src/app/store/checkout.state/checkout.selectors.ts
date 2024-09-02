import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { checkoutStateInterface } from "./checkout.state";



export const selectProductsState = (state:AppState) => state.checkout;
export const getCheckoutProducts = createSelector(
    selectProductsState,
    (state:checkoutStateInterface) => state.checkoutList
) 

export const getCheckoutProductsLength = createSelector(
    selectProductsState,
    (state:checkoutStateInterface) => state.checkoutList.length
) 

export const getSumPrices = createSelector(
    selectProductsState,
    (state:checkoutStateInterface) => state.checkoutList.map(p => +p.price).reduce((prev, curr) => (prev + curr),0 )
)