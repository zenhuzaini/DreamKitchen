import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@101101996Zen',
  database: 'journey',
  logging: true,
  synchronize: false,
  migrationsRun: false,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'history',
});
