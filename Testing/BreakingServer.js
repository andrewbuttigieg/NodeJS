var handleRequest = function(req, res) {
  res.send('200');
//  res1.end('Hello, World!\n');
};

require('http').createServer(handleRequest).listen(8080);

console.log('Server started on port 8080');
