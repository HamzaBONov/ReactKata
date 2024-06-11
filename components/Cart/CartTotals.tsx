import { useCartContext } from "@/context/CartContext";

const CartTotals = () => {
	const { totalAmount, shippingFee } = useCartContext();

	return (
		<div className="bg-gray-100 p-8">
			<div className="bg-gray-100 p-8">
				<h5 className="flex justify-between font-medium text-base">
					Total avant livraison: <span>${totalAmount.toFixed(2)}</span>
				</h5>
				<p className="flex justify-between font-medium text-base">
					Livraison: <span>${shippingFee}</span>
				</p>
				<h4 className="flex justify-between my-4 font-semibold text-base">
					Total: <span>${(totalAmount + shippingFee).toFixed(2)}</span>
				</h4>
				<button className="w-full bg-black text-white border border-primary py-2 px-4 uppercase transition duration-200 hover:bg-white hover:text-black">
					Payer
				</button>
			</div>
		</div>
	);
};
export default CartTotals;
