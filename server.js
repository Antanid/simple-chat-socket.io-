
const express = require("express");

const app = express();
const server = require('http').createServer(app);
const io =  require("socket.io")(server);

const rooms = new Map();

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

io.on('connection', socket => {
    console.log('socket connec', socket.id)
})

server.listen(9999, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server start");
});
