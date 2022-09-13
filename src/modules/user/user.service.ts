import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserBaseDTO } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async getUsers(): Promise<UserBaseDTO[]> {
    const users = await this.userRepository.find();
    return users;
  }

  public async getUserById(id: string): Promise<UserBaseDTO> {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }
}
