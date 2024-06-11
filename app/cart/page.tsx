import CartContent from "@/components/Cart/CartContent";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

export const metadata = {
	title: "Carrefour - Panier",
};

const CartPage = () => {
	return (
		<PageWrapper>
			<CartContent />
		</PageWrapper>
	);
};
export default CartPage;