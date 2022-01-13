import types from "../types/types";

export const actionLogin = (user, pass) => {
    return {
        type: types.login,
        payload: {
            user,
            pass
        }
    }
}

export const actionLogout = () => {
    return {
        type: types.logout,
        payload: {}
    }
}

