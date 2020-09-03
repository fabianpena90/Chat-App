let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
 
  io.emit('chat message', 'some message sent to all users');

  socket.broadcast.emit('hi');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


http.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
});