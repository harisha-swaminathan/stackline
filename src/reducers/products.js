const defaultState = [];

export default (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_PRODUCTS':
			return [...action.products];
		case 'GET_PRODUCT':
			return state.map((product) => {
				if (product.id === action.id) {
					return {
						product,
					};
				}
			});
		default:
			return state;
	}
};
