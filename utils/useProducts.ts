import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {ProductType} from "@/types/ProductType";

const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

export const useProducts = () => {
    return useQuery<ProductType[], Error>({
        queryKey: ['products'],
        queryFn: fetchProducts,
      });
};