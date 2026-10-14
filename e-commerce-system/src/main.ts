import { fetchProducts } from "./services/apiService";
import { calculateDiscount } from "./utils/discountCalculator";

fetchProducts().then(products =>{
    products.forEach(product =>{
        const discount = calculateDiscount(product);
        product.displayDetails();
        console.log(`Discount: $${discount.toFixed(2)}`)
    });
})
.catch(error => {
    console.log (error)
})

