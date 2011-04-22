var http          = require('http'),
    io            = require('socket.io'),
    connect_count = 0
    messages      = [];

server = http.createServer(function(req, res){
    console.log('[http] on connection ' + connect_count);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello world</h1>'); 
    });

server.listen(8000);

var socket = io.listen(server); 

socket.on('connection', function(client){
    client.on('message',    function(msg) {onMessage(msg, client);});
    client.on('disconnect', function() {console.log('on disconnect ');});
}
);

function onMessage(msg, client) {
  // console.log(JSON.parse(msg));
  // console.log('onMessage - ' + msg);
  msg.sessionId = client.sessionId;
  //var tmp = {"sessionId" : client.sessionId, "data" : msg};
  messages.push(msg);
  client.broadcast(JSON.stringify(msg));
}
