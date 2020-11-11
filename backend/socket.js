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
  const dm = io.of('/dm');
  const chat = io.of(/^\/chat-.+$/);

  room.on('connection', (socket) => {
    console.log('connected to room nsp');
    socket.on('disconnect', () => {
      console.log('disconnected from room nsp');
    });
  });

  dm.on('connection', socket => {
    // console.log('dm socket', socket);
    console.log('connected to dm nsp')

    socket.on('disconnect', () => {
      console.log('disconnected from dm nsp');
    })
  })

  chat.on('connection', socket => {
    const chat = socket.nsp;
    console.log(chat.name);
    // socket.join(chat.name);
    chat.emit('hello', chat.name);

    socket.on('disconnect', () => {
      chat.emit('leaveRoom', 'bye');
    })
  });
}