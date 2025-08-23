import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    @MessagePattern('get_user')
    getUser(id:number) {
        // Logic to get user
        return { id, name: 'vishal patel' };
    }
}
