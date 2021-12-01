const net = require('net');


// below moved from play.js
const connect = function () {
  const conn = net.createConnection( {
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
 // code sets the 'connect' event to log a console message when connection first established
  conn.on('connect', () => {
    console.log('You are now in the game.');
    conn.write('Name: TLC');
  });

  // handling data sent from the server
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('end', () => {
    console.log('Disconnected from the server.');
    rl.close();
  });


  // // code sets the 'connect' event to log a console message when connection first established
  // conn.on('connect', () => {
  //   console.log('You are now in the game.\n')
  // });

return conn;
};


module.exports = connect;