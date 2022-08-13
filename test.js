console.log('this is http ');
const http = require('http');

// this code is to retry with exponential backoff
function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('soemthing here');
      resolve('something');
    }, timeout);
  });
}

wait(3000).then((r) => {
  console.log('something ', r);
});

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('test tes');
  })
  .listen(1996);
