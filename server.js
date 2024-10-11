const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.static('public'));
let activeUsers = 0;
io.on('connection', (socket) => {
  activeUsers++;
  console.log(`New connection: ${activeUsers} users connected`);
  io.emit('visitorUpdate', activeUsers);
  socket.on('disconnect', () => {
    activeUsers--;
    console.log(`User disconnected: ${activeUsers} users connected`);
    io.emit('visitorUpdate', activeUsers);
  });
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
