// ! Import the built-in HTTP module to create a server
const http = require("http");

// ! Import the built-in URL module to work with URLs
const url = require("url");

// ! Define the function that will handle incoming HTTP requests
const requestHandler = (req, res) => {
  // * Parse the requested URL to get details like the pathname
  const passedUrl = url.parse(req.url, true);

  // * Extract the pathname part of the URL (e.g., '/products/123')
  const pathName = passedUrl.pathname;

  // * Split the pathname into parts using "/" and filter out empty parts
  const pathComponent = pathName.split("/").filter(Boolean);

  // * Check if the first part of the path is "products" and if there is a second part (e.g., an ID)
  if (pathComponent[0] === "products" && pathComponent[1]) {
    // * Extract the product ID (the second part of the path)
    const productID = pathComponent[1];

    // * Respond with a success status code (200) and plain text content type
    res.writeHead(200, { "content-type": "text/plain" });

    // * Send the product ID back to the client in the response
    res.end(`Product id ${productID}`);
  } else {
    // * If the URL doesn't match the expected format, send a "not found" response
    res.writeHead(404, { "content-type": "text/plain" });

    // * Send a "Page not found" message back to the client
    res.end("Page not found");
  }
};

// * Create an HTTP server that uses the requestHandler function to respond to requests
const server = http.createServer(requestHandler);

// * Define the port number where the server will listen for incoming requests
const PORT = 3000;

// * Start the server and listen on the specified port
server.listen(PORT, () => {
  // * Log a message to the console when the server starts
  console.log(`This server is running on http://localhost:${PORT}`);
});
