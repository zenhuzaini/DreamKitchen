import { OmitType } from '@nestjs/graphql';
import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column } from 'typeorm';

export class UserCategory extends OmitType(BaseEntity, ['createdBy']) {
  @Column({ type: 'varchar', length: 300 })
  public category: string;
}
