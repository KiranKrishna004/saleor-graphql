/** @format */

import { configureStore } from "@reduxjs/toolkit";
import channelReducer from "../reducers/channelReducer";
import productReducer from "../reducers/productReducer";

const store = configureStore({
	reducer: { channel: channelReducer, products: productReducer },
});

export default store;
