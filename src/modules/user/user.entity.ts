import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserRole } from '../user_role/user_role.entity';
import { UserRoleType } from './user.type';

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
  @Column({
    type: 'enum',
    enum: ['admin', 'user', 'ghost'],
    default: 'ghost',
  })
  public userRoleId: UserRoleType;

  @ManyToOne(() => UserRole, (userRole) => userRole.id)
  @JoinColumn({ name: 'userRoleId' })
  public userRole: UserRole;
}
