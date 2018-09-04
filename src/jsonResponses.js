// Requires
const text = require('./textResponses.js');

// Function to send hello in the response
const getHelloJSON = (request, response) => {
  // JSON of the hello text
  const helloJSON = {
    message: text.hello,
  };

  // Convert the JSON into a string since the response needs to be as text
  const stringMessage = JSON.stringify(helloJSON);

  // Send the JSON in the response
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// Function to send the time in the response
const getTimeJSON = (request, response) => {
  // JSON of the time
  const timeJSON = {
    time: text.getTimeString(),
  };

  // Convert the JSON into a string since the response needs to be as text
  const stringMessage = JSON.stringify(timeJSON);

  // Send the JSON in the response
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// Export the functions (make them public)
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
