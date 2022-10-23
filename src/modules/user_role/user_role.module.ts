import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './user_role.entity';
import { UserRoleResolver } from './user_role.resolver';
import { UserRoleService } from './user_role.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole])],
  providers: [UserRoleResolver, UserRoleService],
  exports: [UserRoleService],
})
export class UserRoleModule {}
