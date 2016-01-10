domain = require('domain'),
d = domain.create();

d.on('error', function(err) {
  console.error(err);
});
