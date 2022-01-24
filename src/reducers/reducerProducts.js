import types from "../types/types"

const initialState = {
    products:[],
}

export const reducerProducts = (state = initialState, action) => {
    switch (action.type) {
        case types.listProducts:
            return {
                products:[...action.payload]
            }
        case types.search:
            return {
                products:[action.payload]
            }  
        case types.addProducts:
            return{
                products:[action.payload]
            }
        default:
            return state
        ;
    }
}