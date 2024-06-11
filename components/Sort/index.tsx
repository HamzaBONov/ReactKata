import {ProductType} from "@/types/ProductType";

type SortProps = {
	state: {
		filteredProducts: ProductType[];
		sort: string;
	};
	updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Sort = ({ state, updateSort }: SortProps) => {
	const { filteredProducts, sort } = state;

	return (
		<section className="flex flex-col gap-4 mb-12 md:flex-row md:justify-between md:mb-8">
			<p>
				{filteredProducts.length} résultat
			</p>
			<form className="flex items-center">
				<label htmlFor="sort" className="mr-2">Trier par: </label>
				<select
					name="sort"
					id="sort"
					value={sort}
					onChange={updateSort}
					className="border-transparent font-semibold cursor-pointer"
				>
					<option value="price-lowest">Prix (Low To High)</option>
					<option value="price-highest">Prix (High To Low)</option>
					<option value="name-a">Name (A-Z)</option>
					<option value="name-z">Name (Z-A)</option>
				</select>
			</form>
		</section>
	);
};

export default Sort;
