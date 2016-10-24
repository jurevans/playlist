var http = require('http');

var app = require('./app')();
var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

http.createServer(app).listen(port, host, function () {
	console.log("Server ready at http://localhost:" + port);
});
