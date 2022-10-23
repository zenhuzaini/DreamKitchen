import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { DeletedItemDTO } from 'src/shared/dto/deletedItem.dto';
import { PaginationDTO } from 'src/shared/dto/pagination.dto';
import {
  CreateUserRoleInputDTO,
  UpdateRoleUserInputDTO,
  UserRoleDTO,
  UsersRolePagedResultDTO,
} from './user_role.dto';
import { UserRoleService } from './user_role.service';

@Resolver(() => UserRoleDTO)
export class UserRoleResolver {
  public constructor(private userRoleService: UserRoleService) {}

  @Query(() => UsersRolePagedResultDTO)
  public async userRole(
    @Args({
      name: 'pagination',
      type: () => PaginationDTO,
      nullable: true,
    })
    paginationDTO: PaginationDTO,
  ): Promise<UsersRolePagedResultDTO> {
    return await this.userRoleService.getUserRole(paginationDTO);
  }

  @Query(() => UserRoleDTO)
  public async getUserRoleById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserRoleDTO> {
    return await this.userRoleService.getUserRoleById(id);
  }

  @Mutation(() => UserRoleDTO)
  public async createUserRole(
    @Args({ name: 'userRole', type: () => CreateUserRoleInputDTO })
    userRole: CreateUserRoleInputDTO,
  ): Promise<UserRoleDTO> {
    return this.userRoleService.createUserRole(userRole);
  }

  @Mutation(() => UserRoleDTO)
  public updateUserRole(
    @Args({ name: 'id', type: () => String })
    id: string,
    @Args({ name: 'userRole', type: () => UpdateRoleUserInputDTO })
    userRole: UpdateRoleUserInputDTO,
  ): Promise<UserRoleDTO> {
    return this.userRoleService.updateUserRole(id, userRole);
  }

  @Mutation(() => DeletedItemDTO)
  public async deleteUserRole(
    @Args({ name: 'id', type: () => String })
    id: string,
  ): Promise<DeletedItemDTO> {
    await this.userRoleService.deleteUserRole(id);
    return { id };
  }
}
