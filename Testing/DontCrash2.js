var handleRequest = function(req, res) {
    res.writeHead(200);
    res1.end('Hello, World!\n');
};
var server = require('http').createServer(handleRequest);
process.on('uncaughtException', function(ex) {
	console.log('exception');
    // do something with exception
});
server.listen(8080);
console.log('Server started on port 8080');
