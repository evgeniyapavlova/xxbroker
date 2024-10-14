export const formatPrice = (price) => {
	let signs = 2;
	if (price < 0.01) signs = 5;
	else if (price <= 1) signs = 3;
	return price.toFixed(signs);
};
