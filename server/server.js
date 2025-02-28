// https://socket.io/docs/v4/tutorial/step-1

const express = require("express"); // makes the server
const app = express(); // called to start server

// below are dependencies
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);
app.use(express.static(path.resolve(""))); // Allows the use of server in html

app.get("/", (req, res) => {
  return res.sendFile("index.html");
});

server.listen(3000, () => {
  console.log("Port connected to 3000"); // to test if running, run in terminal : npx nodemon server
});
