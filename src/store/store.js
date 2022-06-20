/** @format */

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import validityReducer from "../reducers/validityReducer";

const store = configureStore({
	reducer: { isValid: validityReducer, products: productReducer },
});

export default store;
