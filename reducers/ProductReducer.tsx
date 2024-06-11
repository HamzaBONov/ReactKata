import {ProductType} from "@/types/ProductType";

type ProductStateType = {
	allProducts: ProductType[];
	filteredProducts: ProductType[];
	filters: {
		text: string;
		category: string;
	};
	sort: string;
	loading?: boolean;
	error?: string | null;
};

type FetchProductsStartAction = {
	type: "FETCH_PRODUCTS_START";
  };
  
  type FetchProductsSuccessAction = {
	type: "FETCH_PRODUCTS_SUCCESS";
	payload: ProductType[];
  };
  
  type FetchProductsErrorAction = {
	type: "FETCH_PRODUCTS_ERROR";
	payload: string;
  };

type UpdateFiltersAction = {
	type: "UPDATE_FILTERS";
	payload: {
		name: string;
		value: string;
	};
};

type FilterProductsAction = {
	type: "FILTER_PRODUCTS";
};

type ResetFiltersAction = {
	type: "RESET_FILTERS";
};

type UpdateSortAction = {
	type: "UPDATE_SORT";
	payload: string;
};

type SortProductsAction = {
	type: "SORT_PRODUCTS";
};

type FilterActionType =
	| UpdateFiltersAction
	| FilterProductsAction
	| ResetFiltersAction
	| UpdateSortAction
	| SortProductsAction
	| FetchProductsStartAction
	| FetchProductsSuccessAction
	| FetchProductsErrorAction;

	const productReducers = (state: ProductStateType, action: FilterActionType) => {
		switch (action.type) {
		  case "FETCH_PRODUCTS_START":
			return { ...state, loading: true, error: null };
		  case "FETCH_PRODUCTS_SUCCESS":
			return { ...state, loading: false, allProducts: action.payload, filteredProducts: action.payload };
		  case "FETCH_PRODUCTS_ERROR":
			return { ...state, loading: false, error: action.payload };
		  case "UPDATE_FILTERS":
			const { name, value } = action.payload;
			return { ...state, filters: { ...state.filters, [name]: value } };
		  case "FILTER_PRODUCTS":
			const { allProducts } = state;
			const { text, category, price, maxPrice } = state.filters;
			let tempProducts = [...allProducts];
			if (text) {
			  tempProducts = tempProducts.filter((product) =>
				product.title.toLowerCase().includes(text.toLowerCase())
			  );
			}

			if (category !== "all") {
			  tempProducts = tempProducts.filter(
				(product) => product.category === category
			  );
			}
	  
			return { ...state, filteredProducts: tempProducts };
		  case "RESET_FILTERS":
			return {
			  ...state,
			  filters: {
				...state.filters,
				text: "",
				category: "all",
			  },
			};
		  case "UPDATE_SORT":
			return { ...state, sort: action.payload };
		  case "SORT_PRODUCTS":
			const { sort, filteredProducts } = state;
			const tempProductsSorted = [...filteredProducts];
			if (sort === "price-lowest") {

			  tempProductsSorted.sort((a, b) => a.price - b.price);
			}
			if (sort === "price-highest") {
			  tempProductsSorted.sort((a, b) => b.price - a.price);
			}
			if (sort === "name-a") {
			  tempProductsSorted.sort((a, b) => a.title.localeCompare(b.title));
			}
			if (sort === "name-z") {

			  tempProductsSorted.sort((a, b) => b.title.localeCompare(a.title));
			}
			return { ...state, filteredProducts: tempProductsSorted };
		  default:
			return state;
		}
	  };
	  
	  export default productReducers;