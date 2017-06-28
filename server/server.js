const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  socket = require('./socketEvents'),
  socketLib = require('socket.io');


  let server;
  const port = 3000;
  server = app.listen(port);
  console.log(`Your server is running on port ${port}.`);

  /* Socket.io Communication */
  var io = socketLib.listen(server);
  io.sockets.on('connection', socket);

  // Setting up basic middleware for all Express requests
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Enable CORS from client-side
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
