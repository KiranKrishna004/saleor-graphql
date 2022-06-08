/** @format */

import { Dispatch } from "redux";
const productsAction = (data) => {
	dispatch({ type: "GET", payload: data });
};
exports.default = { productsAction };
