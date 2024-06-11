import { ProductType } from "@/types/ProductType";

export const getUniqueValues = (array: ProductType[], type: string) => {
  let unique = array.map((item: any) => item[type]);

  if (type === "size") {
    unique = unique.flat();
  }

  return ["all", ...Array.from(new Set(unique))];
};
