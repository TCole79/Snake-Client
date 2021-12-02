//const readline = require('readline');
const connect = require("./client"); // this says look for the connect function in client.js


// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  // Create a function called handleUserInput and register it as the "data" callback handler for stdin.
  const handleUserInput = function (key) {

  //  \u0003 maps to ctrl+c input key
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
  conn.write('Move: up');
  } else if (key === 's') {
    conn.write('Move: down');
  } else if (key === 'a') {
    conn.write('Move: left');
  } else if (key === 'd') {
    conn.write('Move: right');
  };
};


// on any input from stdin (standard input), output a "." to stdout
// stdin.on('data', (key) => {
//   process.stdout.write('.');
// });


// handling out input typed into the terminal
// and writing it to the server
// rl.on('line', (input) => {
//   client.write(`${input}\n`)
// });





  return stdin;
};


console.log('Connecting...');
connect();