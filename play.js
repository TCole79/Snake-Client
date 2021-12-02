//const connect = require("./client"); // this says look for the connect function in client.js

const { connect } = require("./client");
// console.log(connect);
const { setupInput } = require("./input");


console.log('Connecting...');
// connect();

setupInput(connect());
//setupInput(connect());