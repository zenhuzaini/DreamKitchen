import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInputDTO, UserDTO } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async getUsers(): Promise<UserDTO[]> {
    const users = await this.userRepository.find();
    return users;
  }

  public async getUserById(id: string): Promise<UserDTO> {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  public async createUser(userData: CreateUserInputDTO): Promise<UserDTO> {
    const user = await this.userRepository.create(userData);
    console.log('get new user ', user);
    return user;
  }
}
