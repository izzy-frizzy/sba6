import Product from "../models/products";
export const calculateTax = (product: Product): number => {
  let taxRate = 4.75;

  if (product.category === "groceries") {
    taxRate = 3;
  }

  return product.price * (taxRate / 100);
};