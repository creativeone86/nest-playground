import {Module} from '@nestjs/common';
import {UsersController} from './User.controller';
import {UsersService} from "./User.service";

@Module({
    controllers: [
        UsersController
    ],
    components: [UsersService]
})
export class UserModule {
}