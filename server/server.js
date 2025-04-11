// https://socket.io/docs/v4/tutorial/step-1

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require("cors");

const app = express();

app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500", // or whatever your frontend origin is
    methods: ["GET", "POST"]
  }
});



app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'server-index.html'));
});


// filter(_, )

// this listens for an event
// socket = the socket that sent the event (client)

// client.emit("connection"); 
io.on('connection', (socket) => {
  console.log('a user connected');
  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});