import {Server} from "socket.io";
const io = new Server(2424);

io.on("connection", (socket) => {
    socket.emit("success", "Connection was successful");
    socket.on("success", (arg) => {
        console.log(arg);
    });
    socket.on("fill", (color) => {
        //
    })
})