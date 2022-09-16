import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserCategory } from '../user_category/user_category.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  public email: string;

  @Column({ type: 'varchar', length: 300 })
  public firstName: string;

  @Column({ type: 'varchar', length: 300 })
  public lastName: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public lastLoginTime: Date;

  @Column({ type: 'varchar', length: 400 })
  public bio: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public dob: Date;

  // --------- ALIASES
  @Column({ type: 'varchar', length: 400 })
  public userCategoryId: string;

  @ManyToOne(() => UserCategory, (userCategory) => userCategory.id)
  @JoinColumn({ name: 'userCategoryId' })
  public userCategory: UserCategory;
}
