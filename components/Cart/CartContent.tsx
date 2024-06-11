"use client";

import Link from "next/link";
import { useCartContext } from "@/context/CartContext";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
	const { cart, clearCart } = useCartContext();

	const emptyCart = (
		<div className="text-center">
			<h2 className="mb-8">Votre panier est vide!</h2>
			<Link href="/" className="px-4 py-2 bg-black text-white transition hover:bg-white hover:text-black border border-black">
				Ajouter des produits
			</Link>
		</div>
	);

	return (
		<section className="container mx-auto my-8 px-4 flex flex-col gap-12 min-h-[70vh] md:my-20 lg:flex-row lg:gap-12 lg:items-start">
			{cart.length < 1 ? (
				emptyCart
			) : (
				<>
					<div className="flex-1">
						<CartColumns />
						{cart?.map((item) => (
							<CartItem key={item.id} {...item} />
						))}
						<div className="text-center py-7 flex flex-col gap-4 md:flex-row md:justify-between">
							<Link href="/" className="px-2 py-1 border border-gray-300 bg-transparent text-gray-700 transition hover:bg-gray-300">
								CONTINUER MES ACHATS
							</Link>
							<button onClick={clearCart} className="px-2 py-1 border-2 border-black bg-black text-white transition hover:bg-white hover:text-black">
								VIDER LE PANIER
							</button>
						</div>
					</div>
					<CartTotals />
				</>
			)}
		</section>
	);
};
export default CartContent;
