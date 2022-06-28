/** @format */

const inititalState = { products: [] };

const productReducer = (state = inititalState, action) => {
	switch (action.type) {
		case "GET": {
			return { products: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default productReducer;
