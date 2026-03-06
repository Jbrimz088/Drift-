/**
 * DRIFT! — Multiplayer server (Express + Socket.io)
 * Real-time sync for tandem drifting
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
  transports: ['websocket', 'polling'],
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  socket.broadcast.emit('player:joined', { id: socket.id });

  socket.on('drift:state', (state) => {
    socket.broadcast.emit('drift:state', { id: socket.id, ...state });
  });

  socket.on('disconnect', () => {
    io.emit('player:left', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`DRIFT! server at http://localhost:${PORT}`);
});
