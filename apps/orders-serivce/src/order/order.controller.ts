import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
  @MessagePattern('create_order')
  createOrder(order: any) {
    // Logic to create an order
    console.log('Order received:', order);
    return { message: 'Order created', order };
  }

  @MessagePattern('get_orders')
  getOrders() {
    // Logic to fetch orders
    console.log('Fetching orders...');
    return [{ id: 1, item: 'Sample Item', quantity: 2 }];
  }
}
