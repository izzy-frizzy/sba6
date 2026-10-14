import { NetworkError } from "../utils/errorHandler";
import Product from "../models/products"

export const fetchProducts = async(): Promise<Product[]> =>{

    try{
        const response = await fetch("https://dummyjson.com/products");

        if(!response.ok){
            throw new NetworkError("Failed to fetch data on products");
        }
        const data = await response.json();

        const products: Product[] = [];

        for (const product of data.products) {
      const newProduct = new Product(
        product.id,
        product.title,
        product.description,
        product.price,
        product.category,
        product.stock,
        product.discountPercentage
      );
      products.push(newProduct);
    }
    return products
}
catch(NetworkError){
    console.log("Error fetching products:", NetworkError);
    throw NetworkError;

    }
}
//     return fetch('https://dummyjson.com/products/1')
// .then(response => {

//     if(!response.ok){
//         throw new NetworkError("Failed to fetch data on products");
//     }
//     return response.json() as Promise<Product[]>;
// }

// )
// .then(data => {
//     data.forEach(data =>{
//         console.log(data.title);
//         console.log(data.price)
// });
//     return data;
// })

// };
// fetchProducts();