var app = require('express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function(socket){

  socket.on('chat message', function(msg){

	var utils = require( "twilio" );

	var accountSid = 'AC1bf28c36aa8c023293404d30e6688e9d';
	var authToken = '6504c476b329fde29cbcb16bf9f54b03';
	var client = require('twilio')(accountSid, authToken);
	 
	client.messages.create({
	    body: "I am HOME!",
	    to: "+17738164129",
	    from: "+17088882048",
	}, function(err, message) {
	    process.stdout.write(message.sid);
	});
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});


