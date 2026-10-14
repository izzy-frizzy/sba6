export default class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    stock: number)
     {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }

  displayDetails(): void {
    console.log(`Product: ${this.title}`);
    console.log(`Price: $${this.price}`);
    console.log(`Category: ${this.category}`);
    console.log(`Stock: ${this.stock}`);
  }
}