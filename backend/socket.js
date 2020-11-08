const socketIO = require('socket.io');

module.exports = (server, app) => {
  const io = socketIO(server, {
    path: "/socket.io",
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
  });
  app.set('io', io);
  const room = io.of('/room');
  const chat = io.of('/chat');

  io.on('connection', (socket) => {
    console.log('connected');
  });

  room.on('connection', (socket) => {
    console.log('room 네임스페이스에 접속');
    socket.on('disconnect', () => {
      console.log('room 네임스페이스 접속 해제');
    });
  });

  chat.on('connection', (socket) => {
    console.log('chat 네임스페이스 접속');

    socket.on('test', (data) => {
      socket.emit('reply', data)
    })

    socket.on('disconnect', () => {
      console.log('chat 네임스페이스 접속해제');
    })
  })

}