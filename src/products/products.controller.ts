import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { Product } from './product.interface.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): Product.Item[] {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(
    @Param('id', ParseIntPipe) id: number,
  ): Product.Item | undefined {
    console.log('Received ID:', id); // Log the received ID for debugging
    return this.productsService.getProductById(id);
  }
}
