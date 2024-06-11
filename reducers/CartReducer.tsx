import CartItemType from "@/types/CartItemType";

type CartStateType = {
	cart: CartItemType[];
	totalAmount: number;
	totalItems: number;
	shippingFee: number;
};

type AddToCartAction = {
	type: "ADD_TO_CART";
	payload: CartItemType
};

type RemoveFromCartAction = {
	type: "REMOVE_FROM_CART";
	payload: string;
};

type ClearCartAction = {
	type: "CLEAR_CART";
};

type ToggleAmountAction = {
	type: "TOGGLE_AMOUNT";
	payload: { id: string; value: string };
};

type CountTotalsAction = {
	type: "COUNT_TOTALS";
};

type CartActionType =
	| AddToCartAction
	| RemoveFromCartAction
	| ToggleAmountAction
	| ClearCartAction
	| CountTotalsAction;

const cartReducer = (state: CartStateType, action: CartActionType) => {
	if (action.type === "ADD_TO_CART") {
		const { id, name, amount, image, price } = action.payload;

		const tempProduct = state.cart.find((i) => i.id === id);

		if (tempProduct) {
			const tempCart = state.cart.map((cartItem) => {
				if (cartItem.id === id) {
					let newAmount = cartItem.amount + amount;
					return { ...cartItem, amount: newAmount };
				} else {
					return cartItem;
				}
			});

			return { ...state, cart: tempCart };
		} else {
			const newItem = {
				id: id,
				amount,
				name: name,
				image: image,
				price: price,
			};
			return { ...state, cart: [...state.cart, newItem] };
		}
	}

	if (action.type === "REMOVE_FROM_CART") {
		const tempCart = state.cart.filter((item) => item.id !== action.payload);
		return { ...state, cart: tempCart };
	}

	if (action.type === "CLEAR_CART") {
		return { ...state, cart: [] };
	}

	if (action.type === "TOGGLE_AMOUNT") {
		const { id, value } = action.payload;
		const tempCart = state.cart.map((item) => {
			if (item.id === id) {
				if (value === "inc") {
					let newAmount = item.amount + 1;
					return { ...item, amount: newAmount };
				} else {
					let newAmount = item.amount - 1;
					if (newAmount < 1) {
						newAmount = 1;
					}
					return { ...item, amount: newAmount };
				}
			} else {
				return item;
			}
		});

		return { ...state, cart: tempCart };
	}

	if (action.type === "COUNT_TOTALS") {
		let newItems = 0;
		let newAmount = 0;

		state.cart.forEach((item) => {
			newItems += item.amount;
			newAmount += item.amount * item.price;
		});

		return { ...state, totalItems: newItems, totalAmount: newAmount };
	}

	return state;
};

export default cartReducer;