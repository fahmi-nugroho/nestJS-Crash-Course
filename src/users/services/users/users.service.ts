import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Fahmi', email: 'fahmi@gmail.com' },
    { username: 'Wanda', email: 'wanda@gmail.com' },
    { username: 'Ansori', email: 'ansori@gmail.com' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
  }

  fetchUserById(id: number) {
    // return { id, username: 'Selected User', email: 'selectedUser@gmail.com' };
    return null;
  }
}
