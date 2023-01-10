import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userSevice: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUsers() {
    return this.userSevice.fetchUsers();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(typeof userData.age);
    return this.userSevice.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userSevice.fetchUserById(id);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }

  // @Get('posts')
  // getUserPosts() {
  //   return [
  //     {
  //       username: 'Fahmi',
  //       email: 'fahmi@gmail.com',
  //       posts: [
  //         {
  //           id: 1,
  //           title: 'Porst 1',
  //         },
  //         {
  //           id: 2,
  //           title: 'Porst 2',
  //         },
  //       ],
  //     },
  //   ];
  // }

  // @Get('posts/comments')
  // getuserPostsComments() {
  //   return [
  //     {
  //       id: 1,
  //       title: 'Post 1',
  //       comments: [],
  //     },
  //   ];
  // }
}
