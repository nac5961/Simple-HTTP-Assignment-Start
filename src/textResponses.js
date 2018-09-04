const hello = 'Hello World';

// Function to get the time
const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

// Function to send the time in the response
const getTime = (request, response) => {
  // Send the time in the response
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

// Function to send hello in the response
const getHello = (request, response) => {
  // Send hello in the response
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

// Export the functions and variables (make them public)
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
