const { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MESSAGES } = require("./constants");

// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
// setup interface to handle user input from stdin
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  // Create a function called handleUserInput and register it as the "data" callback handler for stdin.
  const handleUserInput = function (key) { // 'data' was function before
    
    if (key === '\u0003') { //  \u0003 maps to ctrl+c input key
      console.log('You have quit the game. Thanks for playing!');
      process.exit();
    } else if (key === MOVE_UP) {
      conn.write('Move: up');
    } else if (key === MOVE_DOWN) {
      conn.write('Move: down');
    } else if (key === MOVE_LEFT) {
      conn.write('Move: left');
    } else if (key === MOVE_RIGHT) {
      conn.write('Move: right');
    } else if (MESSAGES[key]) {   // accessing the object key
      conn.write(MESSAGES[key]);
    };
    
  return stdin;
  }; 
  stdin.on("data", handleUserInput);
}

// what is the ES6 shorthand for // module.exports = setupInput; is it the below: ?
module.exports = { setupInput };