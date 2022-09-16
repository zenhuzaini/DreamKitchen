import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeletedItemDTO {
  @Field(() => String)
  public id: string;
}
