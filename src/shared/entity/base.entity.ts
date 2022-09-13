import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({ type: 'boolean', default: true })
  public isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public createDateTime: Date;

  @Column({ type: 'varchar', length: 300, default: '1' })
  public createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  public modifyDateTime: Date;

  @Column({ type: 'varchar', length: 300, default: () => 'CURRENT_TIMESTAMP' })
  public lastChangedBy: string;
}
