import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'zenhuzaini',
  password: 'zenhuzaini12345',
  database: 'postgres',
  logging: true,
  synchronize: false,
  migrationsRun: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'history',
});

// const configService = new ConfigService();

// export default new DataSource({
//   type: 'postgres',
//   host: configService.get('POSTGRES_HOST'),
//   port: configService.get('POSTGRES_PORT'),
//   username: configService.get('POSTGRES_USER'),
//   password: configService.get('POSTGRES_PASSWORD'),
//   database: configService.get('POSTGRES_DB'),
// });
