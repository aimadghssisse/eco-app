const initState = {
	products: []
}



export default (state = initState, action) => {
	switch(action.type) {
		case "setProducts":
			return {
				...state, ...action.payload
			};
		default:
			return state;
	}
}
