/** @format */

const inititalState = { channel: "channel-pln" };

const channelReducer = (state = inititalState, action) => {
	switch (action.type) {
		case "CHANGE": {
			// console.log("change", action.payload);
			return { ...state, channel: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default channelReducer;
