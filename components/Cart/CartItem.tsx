import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import AmountButtons from "../AmountButtons/";
import { FaTimes } from "react-icons/fa";
import CartItemType from "@/types/CartItemType";

const CartItem = ({ id, image, name, price, amount }: CartItemType) => {
	const { removeFromCart, toggleAmount } = useCartContext();

	const increase = () => {
		toggleAmount(id, "inc");
	};

	const decrease = () => {
		toggleAmount(id, "dec");
	};

	return (
		<article className="flex items-center gap-4 py-4 border-b border-gray-300">
			<div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
				<Image src={image} alt={name} width={120} height={120} className="w-30 h-30" />
				<div className="flex flex-col">
					<h5 className="font-semibold">{name}</h5>
					<h5 className="font-semibold">${price}</h5>
				</div>
			</div>
			<div className="flex-1 flex justify-center">
				<AmountButtons amount={amount} increase={increase} decrease={decrease} cartView />
			</div>
			<h5 className="flex-1 text-center font-semibold">${(price * amount).toFixed(2)}</h5>
			<button
				className="bg-transparent border-none cursor-pointer text-red-600 hover:text-red-800"
				onClick={() => removeFromCart(id)}
			>
				<FaTimes />
			</button>
		</article>
	);
};
export default CartItem;
