var http = require('http');
var one = require('./one.js');
var two = require('./two.js');

var server = http.createServer(function (req, res) {

   //if(req.query.x == "add") {
	  	one.addFunction(5, 5, (result)=>{
	  	  res.writeHead(200, {'Content-Type': 'text/html'});
		  res.write('Hello World!');
		  res.write('Result : ' + result);
		  res.end();
	  });	
  /*} else if(req.query.x == "mul") {
	  	one.addFunction(5,5, (result)=>{
	  	  res.writeHead(200, {'Content-Type': 'text/html'});
		  res.write('Hello World!');
		  res.write('Result : ' + result);
		  res.end();
	  });
  }  */
  
});
/*.listen(3000, ()=>{
	console.log('Server is running on 3000');
});*/

server.listen(3000, ()=>{
	console.log('Server is running on 3000');
	server.close();
});

console.log('This I will change during test cases');