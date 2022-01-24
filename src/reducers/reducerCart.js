import types from "../types/types";

const initialState = {
    cart: []
}

export const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        
        case types.cart:
            return{
                cart:[action.payload]
            }
            default:
                return state
            }
            
        }
    