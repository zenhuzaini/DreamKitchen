import {
  Field,
  InputType,
  IntersectionType,
  ObjectType,
  PartialType,
} from '@nestjs/graphql';
import { BaseDTO } from 'src/shared/dto/base.dto';
import { PagedResultDTO } from 'src/shared/dto/pagedResult.dto';

// https://docs.nestjs.com/graphql/mapped-types
@ObjectType()
export class UserRoleBaseDTO {
  @Field()
  public role: string;
}

@ObjectType()
export class UserRoleDTO extends IntersectionType(
  UserRoleBaseDTO,
  BaseDTO,
  ObjectType,
) {}

@InputType()
export class CreateUserRoleInputDTO extends PartialType(
  UserRoleBaseDTO,
  InputType,
) {}

@InputType()
export class UpdateRoleUserInputDTO extends PartialType(
  UserRoleDTO,
  InputType,
) {}

@ObjectType()
export class UsersRolePagedResultDTO extends PagedResultDTO<UserRoleDTO> {
  @Field(() => [UserRoleDTO])
  public records: UserRoleDTO[];
}
