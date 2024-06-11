"use client";

import { CartProvider } from "./CartContext";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
			<CartProvider>
				<Toaster toastOptions={{ duration: 3000 }} />
				{children}
			</CartProvider>
	);
};
export default Providers;