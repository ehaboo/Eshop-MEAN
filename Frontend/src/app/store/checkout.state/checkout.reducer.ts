import { createReducer, on } from "@ngrx/store";
import { initialState } from "./checkout.state";
import { addCheckoutProduct, addCheckoutProductSuccess, deleteCheckoutProductSuccess, loadCheckoutList, loadCheckoutListSuccess } from "./checkout.actions";
import { state } from "@angular/animations";


export const checkoutReducer = createReducer(
    initialState, 
    on(loadCheckoutList, (state) =>({...state})
    ),
    on(loadCheckoutListSuccess, (state, {checkoutList}) => ({...state,checkoutList})
    ),
    on(addCheckoutProduct, (state) =>({...state})
    ),
    on(addCheckoutProductSuccess, (state, {checkoutProduct}) => ({
        ...state,
        checkoutList:[...state.checkoutList, checkoutProduct]
    })
    ),
    on(deleteCheckoutProductSuccess, (state, {checkoutProduct}) => {
        let cl = [...state.checkoutList]; 
        const index = cl.findIndex(c => c.id === checkoutProduct.id ); 
        if(index >= 0){
         cl.splice(index,1); 
        }
        return {
            ...state,
            checkoutList: cl
        }
    })
)
