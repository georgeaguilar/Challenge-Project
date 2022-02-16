import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { IUser } from './interfaces/user.interface';

// export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel('users') private readonly userModel: Model<IUser>) {}

  // private readonly users = [
  //   {
  //     userId: 1,
  //     email: 'georgeaguilar11@hotmail.com',
  //     password: 123,
  //   },
  //   {
  //     userId: 2,
  //     email: 'carlosaguilar11@hotmail.com',
  //     password: 123,
  //   },
  // ];

  // async findOne(email: string): Promise<User> {
  //   return this.users.find((user) => user.email === email);
  // }

  async findOne(email: string): Promise<IUser> {
    return await this.userModel.findOne({ email });
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }
}
