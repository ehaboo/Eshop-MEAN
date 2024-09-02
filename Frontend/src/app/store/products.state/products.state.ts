import { ProductModel } from "../../models/product.model";


export interface ProductsStateInterface {
    productsList:ProductModel[] 

}
export const initialState:ProductsStateInterface = {
    productsList: []
}