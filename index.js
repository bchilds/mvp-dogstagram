var server = require('./server.js');

// Get Index
server.get('/', (req, res) => {
	res.sendFile('index.html');
});

var port = 1337;
server.listen(port, () => {
	console.log("Listening on " + port);
});