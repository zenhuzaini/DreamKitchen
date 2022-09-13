import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserBaseDTO {
  @Field()
  public email: string;

  @Field()
  public firstName: string;

  @Field()
  public lastName: string;

  @Field({ nullable: true })
  public inactive: boolean;

  @Field({ nullable: true })
  public lastLoginTime: Date;

  @Field({ nullable: true })
  public isOwner: boolean;

  @Field({ nullable: true })
  public isCustomer: boolean;

  @Field({ nullable: true })
  public isAdministrator: boolean;

  @Field({ nullable: true })
  public isEmployee: boolean;
}

// @ObjectType()
// export class UserDTO extends IntersectionType(
//   UserDTOBase,
//   ListItemDTO,
//   ObjectType,
// ) {}

// @ObjectType()
// export class UsersPagedResultDTO extends PagedResultDTO<UserDTO> {
//   @Field(() => [UserDTO])
//   public records: UserDTO[];
// }
