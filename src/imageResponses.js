// Requires
const fs = require('fs'); // File system module

// Get image before startup
const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// Function to send the image in the response
const getImage = (request, response) => {
  // Send the image in the response
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

// Export the function (make it public)
module.exports.getImage = getImage;
