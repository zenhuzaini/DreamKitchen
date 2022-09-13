const { Client } = require('pg');

console.log('after  connecting');

const connectDb = async () => {
  try {
    const client = new Client({
      host: 'localhost',
      user: 'postgres',
      database: 'postgres',
      password: '@101101996Zen',
      port: '5432',
    });

    console.log('before connected');
    await client.connect();
    // const res = await client.query('SELECT * FROM some_table');
    console.log('get something after');
    await client.end();
  } catch (error) {
    console.log(error);
  }
};

connectDb();
