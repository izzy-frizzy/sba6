import Product from "../models/products";

export const calculateDiscount = (product: Product): number => {
  return product.price * (product.discountPercentage / 100);
};