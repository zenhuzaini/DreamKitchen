import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import { WidgetModule } from './modules/widget/widget.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { configService } from 'config/config.service';
import { ConfigModule } from '@nestjs/config';
import configurations from './config/configurations';
import { AppDataSource } from './config/ormconfig';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      debug: false,
      playground: true,
    }),
    ConfigModule.forRoot({
      load: [configurations],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(AppDataSource.options),
    UserModule,
    WidgetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
