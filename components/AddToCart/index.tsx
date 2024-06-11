"use client";

import { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import AmountButtons from "../AmountButtons/";
import CartItemType from "@/types/CartItemType";

type AddToCartProps = {
	product: Omit<CartItemType, "amount">;
};

const AddToCart = ({ product }: AddToCartProps) => {
	const { addToCart } = useCartContext();
	const { id } = product;
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((prev) => {
			let tempAmount = prev + 1;
			return tempAmount;
		});
	};

	const decrease = () => {
		setAmount((prev) => {
			let tempAmount = prev - 1;
			if (tempAmount < 1) {
				tempAmount = 1;
			}
			return tempAmount;
		});
	};

	return (
		<section>
			<div className="py-2 border-b border-gray-300 flex items-center gap-2">
				<AmountButtons
					amount={amount}
					increase={increase}
					decrease={decrease}
				/>
				<button
					onClick={() => addToCart({...product, amount})}
					className="py-1 px-2 bg-transparent border border-gray-300 cursor-pointer text-gray-500 transition duration-200 ease-in-out hover:bg-gray-300"
				>
					Ajouter au panier
				</button>
			</div>
		</section>
	);
};
export default AddToCart;