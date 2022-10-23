import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
} from 'typeorm';

@Entity({ name: 'baseEntity' })
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'boolean', default: true })
  public isActive: boolean;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public modifyDateTime: Date;

  @Column({ type: 'varchar', length: 300, default: () => '1' })
  public lastChangedBy: string;
}
