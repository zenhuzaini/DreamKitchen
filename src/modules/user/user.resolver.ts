import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateUserInputDTO, UserDTO } from './user.dto';
import { UserService } from './user.service';

@Resolver(() => UserDTO)
export class UserResolver {
  public constructor(private userService: UserService) {}

  @Query(() => [UserDTO])
  public async user(): Promise<UserDTO[]> {
    return await this.userService.getUsers();
  }

  @Query(() => UserDTO)
  public async getUserById(
    @Args('id', { type: () => String }) id: string,
  ): Promise<UserDTO> {
    return await this.userService.getUserById(id);
  }

  @Mutation(() => UserDTO)
  public async createOwnerUser(
    @Args({ name: 'user', type: () => CreateUserInputDTO })
    user: CreateUserInputDTO,
  ): Promise<UserDTO> {
    return this.userService.createUser(user);
  }
}
