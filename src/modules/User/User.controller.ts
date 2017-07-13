import {Controller, Get, Post, HttpStatus, Response, Param, Body} from '@nestjs/common';
import {UsersService} from "./User.service";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Get()
    async getAllUsers(@Response() res) {
        const users = await this.usersService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    async getUser(@Response() res, @Param('id') id) {
        const user = await this.usersService.getUser(+id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    async addUser(@Response() res, @Body('user') user) {
        console.info("@user", user);
        await this.usersService.addUser(user);
        res.status(HttpStatus.CREATED).json(await this.usersService.getAllUsers());
    }
}