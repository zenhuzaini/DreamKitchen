import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserCategory extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  public category: string;
}
