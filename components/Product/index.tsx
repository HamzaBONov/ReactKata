"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import {ProductType} from "@/types/ProductType";
import Stars from "../Stars/Stars";
import AddToCart from "../AddToCart";

const Product = ({ id, image, title, price, rating }: ProductType) => {
	return (
        <motion.article layout className="p-4 bg-white rounded-lg shadow-md w-[min-content]">
        <div className="relative w-64 h-64">
            <Image
                src={image}
                alt={title}
                className=" object-cover object-center rounded-md"
                layout="fill"
            />
        </div>
        <footer className="mt-4">
            <div className="flex justify-between items-center">
                <h4>
                    <Link href={`/products/${id}`} className="text-lg font-semibold text-gray-800 hover:text-gray-600">
                        {title}
                    </Link>
                </h4>
                <BiHeart className="text-red-500 text-2xl" />
            </div>
            <Stars stars={parseFloat(rating.rate)} reviews={parseInt(rating.count)} />
            <p className="mt-2 text-lg font-semibold text-gray-800">
                <span>${price}</span>
            </p>
            <AddToCart product={{id, name:title, image, price}} />
        </footer>
    </motion.article>
	);
};
export default Product;