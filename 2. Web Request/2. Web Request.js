var http = require('http');
var options = {
  host: 'www.google.com',
  path: ''
};
var callback = function(response) {
  var str = '';

  //data is gotten in chunks
  response.on('data', function (chunk) {
    str += chunk;
  });

  //whole stream was read
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
