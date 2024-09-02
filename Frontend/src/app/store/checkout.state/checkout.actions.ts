import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../../models/product.model";


export const LOAD_CHECKOUT_LIST_SUCCESS = '[checkout page] load checkout list success'; 
export const LOAD_CHECKOUT_LIST = '[checkout page] load checkout list'; 
export const ADD_CHECKOUT_PRODUCT = '[checkout page] add checkout product'
export const ADD_CHECKOUT_PRODUCT_SUCCESS = '[checkout page] add checkout product success'
export const DELETE_CHECKOUT_PRODUCT_SUCCESS = '[checkout page] delete checkout product success'


export const loadCheckoutList = createAction(LOAD_CHECKOUT_LIST)
export const loadCheckoutListSuccess = createAction(LOAD_CHECKOUT_LIST_SUCCESS,props<{checkoutList:ProductModel[]}>()); 
export const addCheckoutProduct = createAction(ADD_CHECKOUT_PRODUCT, props<{checkoutProduct:ProductModel}>()); 
export const addCheckoutProductSuccess = createAction(ADD_CHECKOUT_PRODUCT_SUCCESS, props<{checkoutProduct:ProductModel}>()); 
export const deleteCheckoutProductSuccess = createAction(DELETE_CHECKOUT_PRODUCT_SUCCESS, props<{checkoutProduct:ProductModel}>()); 
