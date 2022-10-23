import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDTO } from 'src/shared/dto/pagination.dto';
import { getPaginationOptions } from 'src/utils/resolvers/pagination';
import { DeleteResult, Repository } from 'typeorm';
import {
  CreateUserInputDTO,
  UpdateUserInputDTO,
  UserDTO,
  UsersPagedResultDTO,
} from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public async getUsers(
    paginationDTO: PaginationDTO,
  ): Promise<UsersPagedResultDTO> {
    const paginationOptions = getPaginationOptions(paginationDTO);
    const [users, count] = await this.userRepository.findAndCount({
      skip: paginationOptions.startIndex,
      take: paginationOptions.itemCount,
    });
    return {
      count,
      records: users,
    };
  }

  public async getUserById(id: string): Promise<UserDTO> {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  public async createUser(userData: CreateUserInputDTO): Promise<UserDTO> {
    const user = await this.userRepository.save(userData);
    return user;
  }

  public async updateUser(
    id: string,
    userData: UpdateUserInputDTO,
  ): Promise<UserDTO> {
    await this.userRepository.update(id, userData);
    return await this.getUserById(id);
  }

  public deleteUser = async (id: string): Promise<DeleteResult> => {
    return this.userRepository.delete({ id });
  };
}
