import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @Field(() => String)
  public id: string;

  @Field(() => String)
  public lastChangedBy: string;

  @Field(() => Boolean, { nullable: true })
  public isActive: boolean;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
  })
  public createDateTime: Date;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
  })
  public modifyDateTime: Date;
}
