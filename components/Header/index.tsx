"use client";

import CartIcon from "./CartIcon";
import React from "react";

const Header = () => {
	return (
		<header className="bg-white border-b border-gray-200 py-3 sticky top-0 z-50 mb-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex">
					<CartIcon />
				</div>
			</div>
		</header>
	);
};

export default Header;
