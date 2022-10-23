import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { DeletedItemDTO } from 'src/shared/dto/deletedItem.dto';
import { PaginationDTO } from 'src/shared/dto/pagination.dto';
import {
  CreateUserInputDTO,
  UpdateUserInputDTO,
  UserDTO,
  UsersPagedResultDTO,
} from './user.dto';
import { UserService } from './user.service';

@Resolver(() => UserDTO)
export class UserResolver {
  public constructor(private userService: UserService) {}

  @Query(() => UsersPagedResultDTO)
  public async user(
    @Args({
      name: 'pagination',
      type: () => PaginationDTO,
      nullable: true,
    })
    paginationDTO: PaginationDTO,
  ): Promise<UsersPagedResultDTO> {
    return await this.userService.getUsers(paginationDTO);
  }

  @Query(() => UserDTO)
  public async getUserById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserDTO> {
    return await this.userService.getUserById(id);
  }

  @Mutation(() => UserDTO)
  public async createUser(
    @Args({ name: 'user', type: () => CreateUserInputDTO })
    user: CreateUserInputDTO,
  ): Promise<UserDTO> {
    return this.userService.createUser(user);
  }

  @Mutation(() => UserDTO)
  public updateUser(
    @Args({ name: 'id', type: () => String })
    id: string,
    @Args({ name: 'user', type: () => UpdateUserInputDTO })
    user: UpdateUserInputDTO,
  ): Promise<UserDTO> {
    return this.userService.updateUser(id, user);
  }

  @Mutation(() => DeletedItemDTO)
  public async deleteUser(
    @Args({ name: 'id', type: () => String })
    id: string,
  ): Promise<DeletedItemDTO> {
    await this.userService.deleteUser(id);
    return { id };
  }
}
