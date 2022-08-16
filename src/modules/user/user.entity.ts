import { BaseEntity } from 'src/shared/entity/base.entity';
import { Column } from 'typeorm';

export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  public email: string;

  @Column({ type: 'varchar', length: 300 })
  public firstName: string;

  @Column({ type: 'varchar', length: 300 })
  public lastName: string;

  @Column({ type: 'boolean', default: false })
  public inactive: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public lastLoginTime: Date;

  @Column({ type: 'boolean', default: false })
  public isOwner: boolean;

  @Column({ type: 'boolean', default: true })
  public isCustomer: boolean;

  @Column({ type: 'boolean', default: false })
  public isAdministrator: boolean;

  @Column({ type: 'boolean', default: false })
  public isEmployee: boolean;
}
