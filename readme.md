Locater App
============

Locater is an app that reads your location in the browser using GeoLocation technology and usesthe Twilio API to send text messages.

To get started Install 
  * Node --> npm install node
  * Socket.io --> npm install socket.io
  * Create a <a href="https://www.twilio.com/try-twilio">Twilio</a> Account 

  * Twilio To Send and Receive Messages
  	Replace the # with your auth token once your signed up to Twilio
 ```javascript
 	var accountSid = 'AC1bf28c36aa8c023293404d30e6688e9d';
	var authToken = '#';
	var client = require('twilio')(accountSid, authToken);
```

  * Sockets to send messages to server based on location
  	Replace Send to Number with your desired number
  	Replace Twilion Number with your Twilio assigned number
```javascript
	client.messages.create({
	    body: "I am cheating on you!",
	    to: "Send To Number ", 
	    from: "Twilio Number",
	}, function(err, message) {
	    process.stdout.write(message.sid);
	});
```
  * Node server

App Is Currently in Early Devlopment
Any Contribution is more than welcome.
