const express = require('express')
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/chat", function (req, res) {
  res.sendFile(__dirname + "/chat.html")
})

io.on("connection", function (socket) {
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg);
  });

});

http.listen(port, function () {
  console.log("listening on " + port);
});