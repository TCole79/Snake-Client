const net = require('net');
//const { IP, PORT } = require('')

// below moved from play.js
const connect = function () {
  const conn = net.createConnection( {
    host: '10.0.2.15', // '10.0.2.15' set to local
    port: 50541,    // 50541 set to local
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
 // code sets the 'connect' event to log a console message when connection first established
  conn.on('connect', () => {
    console.log('You are now in the game.');
    conn.write('Name: TLC');
    setTimeout(() => conn.write('Move: up'), 50);

  });

  // handling data sent from the server
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('end', () => {
    console.log('Disconnected from the server.');
    rl.close();
  });

return conn;
};

module.exports = connect;