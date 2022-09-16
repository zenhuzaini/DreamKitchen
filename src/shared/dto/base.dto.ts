import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @Field(() => String)
  public id: string;

  // @Field(() => String)
  // public createdBy: string;

  @Field(() => String)
  public lastChangedBy: string;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  public isActive: boolean;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
    defaultValue: () => new Date(),
  })
  public createDateTime: Date;

  @Field(() => GraphQLISODateTime, {
    nullable: true,
    defaultValue: () => new Date(),
  })
  public modifyDateTime: Date;
}
