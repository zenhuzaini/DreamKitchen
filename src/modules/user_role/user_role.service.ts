import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDTO } from 'src/shared/dto/pagination.dto';
import { getPaginationOptions } from 'src/utils/resolvers/pagination';
import { DeleteResult, Repository } from 'typeorm';
import {
  CreateUserRoleInputDTO,
  UpdateRoleUserInputDTO,
  UserRoleDTO,
  UsersRolePagedResultDTO,
} from './user_role.dto';
import { UserRole } from './user_role.entity';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRole)
    private userRoleRepository: Repository<UserRole>,
  ) {}

  public async getUserRole(
    paginationDTO: PaginationDTO,
  ): Promise<UsersRolePagedResultDTO> {
    const paginationOptions = getPaginationOptions(paginationDTO);
    const [userRoles, count] = await this.userRoleRepository.findAndCount({
      skip: paginationOptions.startIndex,
      take: paginationOptions.itemCount,
    });
    return {
      count,
      records: userRoles,
    };
  }

  public async getUserRoleById(id: string): Promise<UserRoleDTO> {
    const user = await this.userRoleRepository.findOneBy({ id });
    return user;
  }

  public async createUserRole(
    userRole: CreateUserRoleInputDTO,
  ): Promise<UserRoleDTO> {
    const user = await this.userRoleRepository.save(userRole);
    return user;
  }

  public async updateUserRole(
    id: string,
    userData: UpdateRoleUserInputDTO,
  ): Promise<UserRoleDTO> {
    await this.userRoleRepository.update(id, userData);
    return await this.getUserRoleById(id);
  }

  public deleteUserRole = async (id: string): Promise<DeleteResult> => {
    return this.userRoleRepository.delete({ id });
  };
}
