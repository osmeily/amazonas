import types from "../types/types";

export const actionCart = (cart) => {
    return {
        type: types.cart,
        payload: cart
    }
}