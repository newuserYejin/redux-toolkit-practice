import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk'
import rootReducer from './reducers/index'
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import authReducer from './reducers/authReducer'

// 미들웨어 사용
// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// toolkit 사용
let store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer
    }
})

export default store
