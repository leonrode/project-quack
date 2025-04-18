
// https://socket.io/docs/v4/tutorial/step-1
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const Level = require("./level");
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



// this listens for an event
// socket = the socket that sent the event (client)
// {
//    socketId: ...
// }


let sockets = [];

let level = new Level(8, 8, 255);
level.getGameJSON();

/**
 * Game class that contains
 *  Level 
 */

/**
 * the state of the game should be in the server
 * the board, the tiles, the colors, the positions, winning condition
 */

// client.emit("connection"); 
io.on('connection', (socket) => {
  console.log('a user connected');
  if (sockets.length < 2) {
    console.log("Adding socket to sockets array...");
    sockets.push(socket);
    console.log("Current number of connected users ", sockets.length);
  } else if (sockets.length == 2) { // we're ready to start playing the game

    // emit to the socket and event called 'game state'
    // with the JSON state as the data payload

    io.emit('game state', level.getGameJSON());
    
  } else {
    // send client a message that the game is already full

    console.log("Game is full, emitting message...");

    // emit from server to this particular client
    socket.emit("game full"); //  TODO: handle this event on the client side
    socket.disconnect();
  }

  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});