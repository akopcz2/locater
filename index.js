// var app = require('express')();

// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendfile('index.html');
// });

// io.on('connection', function(socket){
//   console.log('a user connected');
// });

var express = require('express'),  
    app = express.createServer(express.logger()),
    io = require('socket.io').listen(app),
    routes = require('./routes');

// Configuration

app.configure(function() {  
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {  
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {  
  app.use(express.errorHandler());
});

// Heroku won't actually allow us to use WebSockets
// so we have to setup polling instead.
// https://devcenter.heroku.com/articles/using-socket-io-with-node-js-on-heroku
io.configure(function () {  
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});

// Routes

var port = process.env.PORT || 5000; // Use the port that Heroku provides or default to 5000  
app.listen(port, function() {  
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

app.get('/', function(req, res){
  res.sendfile('index.html');
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




// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });


