/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";
import productReducer from "../reducers/productReducer";
import validityReducer from "../reducers/validityReducer";

const store = configureStore({
	reducer: {
		isValid: validityReducer,
		products: productReducer,
		cart: cartReducer,
	},
});

export default store;
