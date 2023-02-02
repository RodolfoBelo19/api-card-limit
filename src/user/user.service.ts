import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = await new this.userModel(createUserDto).save();
    return createdUser.id;
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.userModel.findByIdAndUpdate(id, updateUserDto);
    return updateUser;
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
