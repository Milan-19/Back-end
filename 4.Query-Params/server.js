// ! Import the built-in 'http' module to create a web server
const http = require("http");

// ! Import the built-in 'url' module to work with URLs and their components
const url = require("url");

// ! Define a function that handles incoming requests to the server
const requestHandler = (req, res) => {
  // * Parse the URL of the incoming request and extract its components
  // * 'true' makes the query string automatically parsed into an object
  const passedUrl = url.parse(req.url, true);

  // * Extract the query parameters from the parsed URL
  const queryParams = passedUrl.query;

  // * Set the HTTP response header with a status code of 200 (OK)
  // * and specify that the content type of the response is plain text
  res.writeHead(200, { "content-type": "text/plain" });

  // * End the response and send back the query parameters as a JSON string
  // * JSON.stringify converts the queryParams object into a JSON string
  res.end(JSON.stringify(queryParams));
};

// ! Create an HTTP server using the 'http' module
// * Pass the requestHandler function to handle incoming requests
const server = http.createServer(requestHandler);

// ! Define the port number where the server will listen for requests
const PORT = 3000;

// ! Start the server and have it listen on the specified port
// * Log a message to the console to indicate that the server is running
server.listen(PORT, () => {
  console.log(`This server is running on http://localhost:${PORT}`);
});
