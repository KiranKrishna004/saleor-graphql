/** @format */

const initialState = { cart: [] };

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "PLUS": {
			const index = state.cart.findIndex(({ id }) => id === action.payload.id);
			if (index === -1) {
				return {
					...state,
					cart: [...state.cart, { id: action.payload.id, count: 1 }],
				};
			} else {
				const newCart = state.cart.map((value) => ({ ...value }));
				newCart[index].count = newCart[index].count + 1;
				return { ...state, cart: newCart };
			}
		}
		case "MINUS": {
			const index = state.cart.findIndex(({ id }) => id === action.payload.id);
			const newCart = state.cart.map((value) => ({ ...value }));
			if (state.cart[index].count === 1) {
				newCart.splice(index, 1);
				return { ...state, cart: newCart };
			} else {
				newCart[index].count = newCart[index].count - 1;
				console.log("newCart: ", newCart);
				return { ...state, cart: newCart };
			}
		}
		default:
			return state;
	}
};

export default cartReducer;
