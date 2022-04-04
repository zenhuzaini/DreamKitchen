import { Resolver, Query } from '@nestjs/graphql';
import { UserBaseDTO } from './user.dto';

@Resolver(() => UserBaseDTO)
export class UserResolver {
  @Query(() => UserBaseDTO)
  public user(): UserBaseDTO {
    return {
      email: 'ds',
      firstName: 'f',
      inactive: true,
      isAdministrator: true,
      isCustomer: true,
      isEmployee: true,
      isOwner: true,
      lastLoginTime: new Date(),
      lastName: 'sss',
    };
  }
}
