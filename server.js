var connect = require('connect');
var serveStatic = require('serve-static');
console.info("Stating webserver on http://localhost:8080")
connect().use(serveStatic(__dirname)).listen(8080);
