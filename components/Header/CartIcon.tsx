import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import { BiShoppingBag } from "react-icons/bi";

const CartIcon = () => {
	const { totalAmount, totalItems } = useCartContext();

	return (
		<div className="flex items-center gap-2">
			<span className="text-base md:text-lg">${totalAmount.toFixed(2)}</span>
			<Link href="/cart" className="relative">
				<BiShoppingBag className="text-2xl md:text-3xl" />
				<span className="absolute top-0 right-0 -mt-3 -mr-3 w-6 h-6 text-xs md:text-sm bg-primary text-white flex items-center justify-center rounded-full">
					{totalItems}
				</span>
			</Link>
		</div>
	);
};

export default CartIcon;
