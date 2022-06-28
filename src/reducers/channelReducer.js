/** @format */

const inititalState = { channel: "channel-pln" };

const channelReducer = (state = inititalState, action) => {
	switch (action.type) {
		case "CHANGE": {
			return { ...state, channel: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default channelReducer;
