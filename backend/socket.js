const socketIO = require('socket.io');

module.exports = (server, app) => {
  const io = socketIO(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true
    }
  });
  app.set('io', io);

  io.on('connection', (socket) => {
    console.log('connected');

    socket.on('test', data => {
      console.log('socket test');
      console.log(data);
    })
  });

}