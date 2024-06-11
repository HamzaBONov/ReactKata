"use client";

import {
	createContext,
	useEffect,
	useContext,
	useReducer,
	ReactNode,
} from "react";
import cartReducer from "@/reducers/CartReducer";
import toast from "react-hot-toast";
import CartItemType from "@/types/CartItemType";

//NextJs using server side render, the window object is not defined there. To fix this issue, we need to wait until the page has been mounted on the client prior to accessing localStorage
const getCartLocaleStorage =
	(typeof window !== "undefined" &&
		JSON.parse(localStorage.getItem("cart")!)) ||
	[];

export const initialState = {
	cart: getCartLocaleStorage,
	totalItems: 0,
	totalAmount: 0,
	shippingFee: 4.99,
};

type addToCartType = ( product: CartItemType) => void;

type CartContextType = {
	cart: CartItemType[];
	totalAmount: number;
	totalItems: number;
	shippingFee: number;
	addToCart: addToCartType;
	removeFromCart: (id: string) => void;
	toggleAmount: (id: string, value: string) => void;
	clearCart: () => void;
};

const CartContext = createContext<CartContextType>(null!);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	const addToCart = (product: CartItemType) => {
		toast.success(`${product.amount} x ${product.name} ajouté au panier`);
		dispatch({
			type: "ADD_TO_CART",
			payload: product,
		});
	};

	const removeFromCart = (id: string) => {
		toast.error("Produit supprimé du panier");
		dispatch({ type: "REMOVE_FROM_CART", payload: id });
	};

	const clearCart = () => {
		toast.error("Votre panier est vide");
		dispatch({ type: "CLEAR_CART" });
	};

	const toggleAmount = (id: string, value: string) => {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, value } });
	};

	useEffect(() => {
		dispatch({ type: "COUNT_TOTALS" });
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{ ...state, addToCart, removeFromCart, clearCart, toggleAmount }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => useContext(CartContext);