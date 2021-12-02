const net = require('net');
const { IP, PORT, MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MESSAGES } = require("./constants");


// below moved from play.js
const connect = function () {
  const conn = net.createConnection( {
    host: IP, // '10.0.2.15' to set to local
    port: PORT   // 50541 to set to local
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
 // code sets the 'connect' event to log a console message when connection first established
  conn.on('connect', () => {
    console.log('You are now in the game.');
    conn.write('Name: TLC');
    // setTimeout(() => conn.write('Move: up'), 50);

  });

  // handling data sent from the server
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('end', () => {
    console.log('Disconnected from the server.');
    conn.destroy();
  });

return conn;
};

// what is the ES6 shorthand for // module.exports = connect; is it the below?
module.exports = { connect };

/*
/vagrant/w2/d3/Snake-Client/input.js:23
    conn.write('Move: up');
    ^

ReferenceError: conn is not defined
    at ReadStream.handleUserInput (/vagrant/w2/d3/Snake-Client/input.js:23:5)
*/