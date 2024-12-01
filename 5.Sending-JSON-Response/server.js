// ! Import the 'http' module to create a server
const http = require("http");

// ! Define a function to handle incoming requests and responses
const requestHandler = (req, res) => {
  // * Create an array of objects with user data
  const data = [
    {
      id: 1,
      name: "Leo",
      email: "leo3345@gmail.com",
    },
    {
      id: 2,
      name: "Lia",
      email: "lia7826@gmail.com",
    },
    {
      id: 3,
      name: "Will",
      email: "Will6254@gmail.com",
    },
  ];

  // * Set the response header to indicate the content type is JSON
  res.setHeader("content-type", "application/json");

  // * Send the JSON stringified data as the response
  res.end(JSON.stringify(data));
};

// ! Create an HTTP server using the request handler
const server = http.createServer(requestHandler);

// ! Define the port number where the server will listen
const PORT = 3000;

// ! Start the server and log a message when it's running
server.listen(PORT, () => {
  console.log(`This server is running on http://localhost:${PORT}`);
});
