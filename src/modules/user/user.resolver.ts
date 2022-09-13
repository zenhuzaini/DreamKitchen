import { Resolver, Query } from '@nestjs/graphql';
import { UserBaseDTO } from './user.dto';
import { UserService } from './user.service';

@Resolver(() => UserBaseDTO)
export class UserResolver {
  public constructor(private userService: UserService) {}

  @Query(() => [UserBaseDTO])
  public async user(): Promise<UserBaseDTO[]> {
    return await this.userService.getUsers();
  }
}
