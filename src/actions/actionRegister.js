import types from "../types/types";

export const actionRegister = (name, email, pass) => {
    return{
        type: types.register,
        payload: {
            name,
            email,
            pass
        }
    }
}