import {
  Field,
  InputType,
  IntersectionType,
  ObjectType,
  OmitType,
  PartialType,
} from '@nestjs/graphql';
import { BaseDTO } from 'src/shared/dto/base.dto';
import { UserRoleEnum, UserRoleType } from './user.type';

@ObjectType()
export class UserBaseDTO {
  @Field()
  public email: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field({ nullable: true })
  public lastLoginTime: Date;

  @Field()
  public bio: string;

  @Field()
  public dob: Date;

  @Field({ nullable: true })
  public userRoleId: UserRoleType = UserRoleEnum.user;
}

@ObjectType()
export class UserDTO extends IntersectionType(
  UserBaseDTO,
  BaseDTO,
  ObjectType,
) {}

@InputType()
export class CreateUserInputDTO extends OmitType(
  UserBaseDTO,
  ['lastLoginTime'] as const, // by the way, `as const` generates better TypeScript types; has no effect on the GraphQL generated types though
  InputType, // now this is the decorator that will be applied to `UserBaseDTO` when mapping this type
) {}

@InputType()
export class UpdateUserInputDTO extends PartialType(UserDTO, InputType) {}

// @ObjectType()
// export class UsersPagedResultDTO extends PagedResultDTO<UserDTO> {
//   @Field(() => [UserDTO])
//   public records: UserDTO[];
// }
