import { checkoutStateInterface } from "./checkout.state/checkout.state";
import { ProductsStateInterface } from "./products.state/products.state";



export interface AppState {
    products:ProductsStateInterface,
    checkout:checkoutStateInterface
}