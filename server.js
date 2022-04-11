const connect = require('connect');
const serveStatic = require('serve-static');



var app = connect();

app.use(serveStatic(__dirname))

app.listen('8000', () => console.log('Server running on 8000...'));
