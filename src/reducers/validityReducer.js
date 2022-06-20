/** @format */

const inititalState = { isValid: false };

const validityReducer = (state = inititalState, action) => {
	switch (action.type) {
		case "TRUE": {
			return { isValid: true };
		}
		default: {
			return state;
		}
	}
};

export default validityReducer;
