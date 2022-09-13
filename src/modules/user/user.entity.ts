import { OmitType } from '@nestjs/graphql';
import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column } from 'typeorm';

export class User extends OmitType(BaseEntity, ['createdBy']) {
  @Column({ type: 'varchar', length: 300 })
  public email: string;

  @Column({ type: 'varchar', length: 300 })
  public firstName: string;

  @Column({ type: 'varchar', length: 300 })
  public lastName: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public lastLoginTime: Date;

  @Column({ type: 'varchar', length: 400 })
  public bio: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public dob: Date;
}
