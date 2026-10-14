import { NetworkError } from "../utils/errorHandler";

export const fecthProducts = () =>{fetch('https://dummyjson.com/products/1')
.then(response => {

    if(!response.ok){
        throw new NetworkError("Failed to fetch data on products");
    }
    return response.json() as Promise<Product[]>;
}

)
.then(data => {
    data.forEach(data =>{
        console.log(data.title);
        console.log(data.price)
});

    })
    
    

};