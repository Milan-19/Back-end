const http = require("http"); // ! Import the HTTP module to create a server

// ! Mimic a database with an array of employee objects
const employees = [
  { id: 1, name: "Emmanuel" },
  { id: 2, name: "Agnes" },
];

// ! Function to handle incoming requests
const requestHandler = (req, res) => {
  const { method, url } = req; // * Extract the HTTP method (GET, POST, etc.) and URL
  const parts = url.split("/"); // * Split the URL into parts (e.g., "/employees/1" becomes ["", "employees", "1"])
  const id = parts[2]; // * Get the employee ID from the URL if present

  // * Handle the root URL "/"
  if (method === "GET" && url === "/") {
    res.setHeader("content-type", "text/plain"); // * Set the response type to plain text
    res.end(
      `search /employees to check employees list and search /employees/[employee id] to check specific employee.`
    ); // * Respond with instructions for the API
  }
  // ! Handle the "/employees" URL to list all employees
  else if (method === "GET" && url === "/employees") {
    res.setHeader("content-type", "application/json"); // * Set the response type to JSON
    res.end(JSON.stringify(employees)); // * Respond with the full list of employees as JSON
  }
  // ! Handle "/employees/[id]" URL to get a specific employee
  else if (method === "GET" && parts[1] === "employees" && id) {
    const employee = employees.find((emp) => emp.id === parseInt(id)); // * Find the employee by ID
    if (employee) {
      res.setHeader("content-type", "application/json"); // * Set response type to JSON
      res.end(JSON.stringify(employee)); // * Respond with the employee's data
    } else {
      res.writeHead(404, { "content-type": "text/plain" }); // * Set response to 404 Not Found
      res.end(JSON.stringify({ message: "Employee not found" })); // * Respond with an error message
    }
  }
  // ! Handle POST requests to "/employees" to add a new employee
  else if (method === "POST" && url === "/employees") {
    let body = ""; // * Initialize an empty string to collect the incoming data

    // * Collect the data in chunks
    req.on("data", (chunk) => {
      body += chunk; // * Append each chunk of data to the body
    });

    // * Once all data is received
    req.on("end", () => {
      const newEmployee = JSON.parse(body); // * Parse the received data as JSON
      employees.push(newEmployee); // * Add the new employee to the array
      res.setHeader("content-type", "application/json"); // * Set response type to JSON
      res.end(JSON.stringify(employees)); // * Respond with the updated list of employees
    });
  }
};

// ! Create the server using the request handler function
const server = http.createServer(requestHandler);

// ! Specify the port the server will listen on
const PORT = 3000;

// ! Start the server and log a message to the console
server.listen(PORT, () =>
  console.log(`This server is running on http://localhost:${PORT}`)
);
