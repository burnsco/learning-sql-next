export default function SocketConnection(io, socket) {
  const createdMessage = (msg) => {
    console.log('New message', msg);
    socket.broadcast.emit('newIncomingMessage', msg);
  };

  socket.on('createdMessage', createdMessage);
}
