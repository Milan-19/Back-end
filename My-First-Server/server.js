// ! Import the "http" module from Node.js
// * The "http" module allows us to create an HTTP server to handle requests and responses.
const http = require("http");

// ! Define a function that will handle incoming HTTP requests and send responses back to the client.
const requestHandler = (req, res) => {
  // * Send HTTP status code 200, indicating "OK", and set the "Content-Type" header to "text/plain" to specify the format of the response.
  res.writeHead(200, { "content-type": "text/plain" });

  // * End the response with a message. This message will be sent to the client.
  res.end("Hello World, This is my first nodejs server");
};

// ! Create an HTTP server instance and pass the "requestHandler" function.
// * This function will be invoked every time a request is received by the server.
const server = http.createServer(requestHandler);

// ! Define a port number where the server will listen for incoming connections.
const PORT = 3000;

// ! Start the server and make it listen on the specified port (3000).
// * Once the server starts, execute the provided callback function to log a message to the console.
server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
