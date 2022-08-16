import { config } from 'dotenv';
config();

console.log('before  config ');

const configurations = () => ({
  port: parseInt(process.env.PORT as string, 10) || 3000,
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT as string, 10) || 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
  runMigrations: true,
});

console.log('get config ', configurations().database);

export default configurations;
