import { ProductModel } from "../../models/product.model";


export interface checkoutStateInterface {
    checkoutList:ProductModel[] 

}
export const initialState:checkoutStateInterface = {
    checkoutList: [],
}