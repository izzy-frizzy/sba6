import { fetchProducts } from "./services/apiService";
import { NetworkError } from "./utils/errorHandler";

fetchProducts().then(products =>{
    products.forEach(product =>{
        product.displayDetails();
    });
})
.catch(NetworkError => {
    console.log (NetworkError.message)
})