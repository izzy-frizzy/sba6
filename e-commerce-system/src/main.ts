import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";

fetchProducts()
  .then((products) => {
    products.forEach((product) => {
      const discount = calculateDiscount(product);
      const taxes = calculateTax(product);
      product.displayDetails();
      console.log(`Discount: $${discount.toFixed(2)}`);
      console.log(`Tax: $${taxes.toFixed(2)}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
