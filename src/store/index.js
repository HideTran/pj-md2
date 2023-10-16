import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";
import { productReducer } from "./slices/product.slice";

export const store = configureStore({
    reducer: {
        userStore: userReducer,
        productStore: productReducer
    }
})