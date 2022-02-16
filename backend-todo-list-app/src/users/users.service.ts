import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      email: 'georgeaguilar11@hotmail.com',
      password: 123,
    },
    {
      userId: 2,
      email: 'carlosaguilar11@hotmail.com',
      password: 123,
    },
  ];

  async findOne(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}
