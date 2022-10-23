const mysql = require('mysql2');
const establishedConnection = () => {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '@101101996Zen',
      database: 'journey',
    });
    con.connect((err) => {
      if (err) {
        console.log('get err ', err);
        reject(err);
      }
      console.log('get conn ', con);
      resolve(con);
    });
  });
};

establishedConnection()
  .then((db) => {
    console.log('Db connection stablished');
    db.query(`select * from user`, null, function (err, data) {
      if (!data) {
        console.log('get nothing ', err);
      } else {
        console.log('Db Connection close Successfully ', data);
      }
    });
  })
  .catch((error) => {
    console.log('Db not connected successfully', error);
  });
