"use client";

import { useEffect, useReducer } from "react";
import productReducer from "@/reducers/ProductReducer";
import Filters from "@/components/Filters/";
import ProductList from "@/components/ProductList";
import Sort from "@/components/Sort/";
import {ProductStateType, ProductType} from "@/types/ProductType";

type ProductsProps = {
	allProducts: ProductType[];
	filteredProducts: ProductType[];
	updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	updateFilters: (e: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>) => void;
	resetFilters: () => void;
	filters: Partial<ProductStateType>;
	sort: string;

};

const Products = ({
  allProducts,
  filteredProducts, 
  updateFilters, 
  resetFilters, 
  updateSort, 
  filters, 
  sort 
}:ProductsProps) => {
  return (
		<>
			<div className="container mx-auto my-8 p-4 grid gap-12 md:px-4 md:my-20 md:grid-cols-[250px_1fr] lg:px-0">
				<Filters
					allProducts={allProducts}
					filterElements={filters}
					updateFilters={updateFilters}
					resetFilters={resetFilters}
				/>
				<div>
					<Sort state={{ filteredProducts, sort }} updateSort={updateSort} />
					<ProductList products={filteredProducts} />
				</div>
			</div>
		</>
	);
};
export default Products;