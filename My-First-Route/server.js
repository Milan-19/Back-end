// ! Import the 'http' module to create an HTTP server.
const http = require("http");

// ! Import the 'url' module to parse URL strings and query parameters.
const url = require("url");

// ! Define a request handler function that processes incoming requests and sends responses.
const requestHandler = (req, res) => {
  // * Parse the incoming request URL to extract the path and query parameters.
  const passedUrl = url.parse(req.url, true);

  // * Check if the request is for the root path ('/') and the HTTP method is GET.
  if (passedUrl.pathname === "/" && req.method === "GET") {
    // * Send a 200 OK response with plain text content indicating the home page.
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to home page");
  }
  // * Check if the request is for the '/about' path and the HTTP method is GET.
  else if (passedUrl.pathname === "/about" && req.method === "GET") {
    // * Send a 200 OK response with plain text content indicating the about page.
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to about page");
  }
  // * Check if the request is for the '/document' path and the HTTP method is GET.
  else if (passedUrl.pathname === "/document" && req.method === "GET") {
    // * Send a 200 OK response with plain text content indicating the document page.
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to document page");
  }
  // * Handle all other cases (unrecognized paths or methods).
  else {
    // * Send a 404 Not Found response with plain text content indicating an error.
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page not found");
  }
};

// ! Create an HTTP server using the 'http' module, passing in the request handler function.
const server = http.createServer(requestHandler);

// ! Define the port number where the server will listen for incoming requests.
const PORT = 3000;

// ! Start the server and begin listening on the specified port.
server.listen(PORT, () => {
  // * Log a message to the console indicating that the server is running and listening.
  console.log(`The server is running on http://localhost:${PORT}`);
});
