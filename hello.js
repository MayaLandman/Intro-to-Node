let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function (req,res) {
	let q = url.parse(req.url, true);
	let filrName = "." + q.pathname + ".html";
	if(filrName == "./.html"){ filrName = "./index.html"; }  
	fs.readFile(filrName, function(err,data){
		if(err){
			res.writeHead(404,{'content-Type': 'text/html'});
			return res.end("404 not found")
		}
		res.writeHead(200,{'content-Type': 'text/html'});
		res.write(data);
		console.log("....Incoming Request: " + req.url);
		res.end();
	})
}).listen(8080);

console.log("Server Listening on Port 8080...");