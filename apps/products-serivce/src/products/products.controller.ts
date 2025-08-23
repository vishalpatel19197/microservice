import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
    @MessagePattern('get_product')
    getProduct(id:number) {
        // Logic to get products
        return { id, name: 'Sample Product', price: 100 };
    }
}
