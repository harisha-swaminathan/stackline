export const addProducts = (products) => ({
	type: 'ADD_PRODUCTS',
	products,
});

export const getProduct = ({ id } = {}) => ({
	type: 'GET_PRODUCT',
	id,
});
