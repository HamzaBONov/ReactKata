
type category = "men's clothing" | "women's clothing" | "electronics" | "jewelery";

export type ProductStateType = {
	allProducts: ProductType[];
	filteredProducts: ProductType[];
	filters: {
		text: string;
		category: string;
		minPrice: number;
		maxPrice: number;
		price: number;
	};
	sort: string;
	loading?: boolean;
	error?: string | null;
};

export type ProductType = {
	category: category;
	description: string;
	id: string;
	image: string;
	title: string;
	price: number;
	rating: {
		count: string;
		rate: string;
	};
};
