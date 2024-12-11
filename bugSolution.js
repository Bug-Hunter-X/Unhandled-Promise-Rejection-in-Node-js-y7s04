const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

//Handle promise rejections
const promise = new Promise((resolve, reject) => {
    reject(new Error('Something went wrong'));
});

promise.catch(error => {
    console.error('Error:', error.message);
    //Add more error handling here
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    //Application specific logging, throwing an error, or other logic.
});