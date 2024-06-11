import Product from "../Product";
import {ProductType} from "@/types/ProductType";

type ProductsListProps = {
	products: ProductType[];
};

const ProductList = ({ products }: ProductsListProps) => {

	if (products.length < 1) {
		return <p>Pas de produits correspondant à votre recherche...</p>;
	}

	return (
		<section className="flex flex-wrap gap-12 justify-center">
			{products?.map((product) => (
				<Product key={product.id} {...product} />
			))}
		</section>
	);
};
export default ProductList;