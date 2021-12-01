const net = require('net');
//const readline = require('readline');


//You used Node's net library (specifically, the createConnection function) to create an object named conn
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection( {
    host: '10.0.2.15',
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    // code that does something when connection first established
    console.log('You are now in the game.')
  });

  // handling data sent from the server
  client.on('data', (data) => {
    console.log(data);
  });

  client.on('end', () => {
    console.log('Disconnected from the server.');
    rl.close();
  })


return conn;
};

console.log('Connecting...');
connect();