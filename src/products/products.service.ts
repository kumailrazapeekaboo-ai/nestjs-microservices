import { Injectable } from '@nestjs/common';
import { Product } from './product.interface.js';
@Injectable()
export class ProductsService {
  private readonly products: Product.Item[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 150000,
    },
    {
      id: 2,
      name: 'Mobile',
      price: 80000,
    },
    {
      id: 3,
      name: 'Keyboard',
      price: 5000,
    },
  ];

  getProducts(): Product.Item[] {
    return this.products;
  }

  getProductById(id: number): Product.Item | undefined {
    return this.products.find((product) => product.id === id);
  }
}
