import {
  Field,
  InputType,
  IntersectionType,
  ObjectType,
  OmitType,
} from '@nestjs/graphql';
import { BaseDTO } from 'src/shared/dto/base.dto';

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

// @InputType()
// export class UpdateMemberUserInputDTO extends UpdateListItemInputDTO {
//   @Field({ nullable: true })
//   public isClientHandler: boolean;

//   @Field({ nullable: true })
//   public isExecutive: boolean;

//   @Field({ nullable: true })
//   public isNonCoreExecutive: boolean;

//   @Field({ nullable: true })
//   public isPartner: boolean;

//   @Field({ nullable: true })
//   public hasRTFPermission: boolean;

//   @Field({ nullable: true })
//   public hasXMLUploadPermission: boolean;
// }

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
