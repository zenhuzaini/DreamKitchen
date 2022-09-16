import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class UserRole extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  public role: string;

  @OneToMany(() => User, (user) => user.userRole)
  public users: User[];
}
