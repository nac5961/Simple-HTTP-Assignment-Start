// Requires
const fs = require('fs'); // File system module

// Get html files before server startup
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// Function to send index page in the response
const getIndex = (request, response) => {
  // Send the index file in the response
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

// Function to send page2 in the response
const getPage2 = (request, response) => {
  // Send the page2 file in the response
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

// Export the functions (make them public)
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
