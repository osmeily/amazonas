import { createStore, combineReducers } from "redux";
import { reducerLogin } from "../reducers/reducerLogin";
import { reducerRegister } from "../reducers/reducerRegister";

const reducers = combineReducers({
    login: reducerLogin,
    register: reducerRegister
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

