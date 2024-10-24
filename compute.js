const http = require('http');    // Pull in the HTTP module

const hostname = process.env.hostname || '127.0.0.1';  // Use environment variables for hostname or fallback
const port = process.env.port || 3001;  // Use environment variables for port or fallback

const server = http.createServer((req, res) => {   // Creates the response loop
    console.log("Request received");
    console.log(req.url);

    // Build a fake URL so we can extract search parameters
    let fake_url = "https://fake.com/path" + req.url;
    const url = new URL(fake_url);
    const search_params = url.searchParams;

    if (req.method === 'GET') {
        let x = parseFloat(search_params.get("x"));  // Get the value of x
        let y = parseFloat(search_params.get("y"));  // Get the value of y

        if (!isNaN(x) && !isNaN(y)) {
            let fx = Math.log2(x);  // Apply Math.log2 to x
            let fy = Math.log2(y);  // Apply Math.log2 to y
            let responseString = `log2(${x}) is ${fx} and log2(${y}) is ${fy}`;
            
            res.statusCode = 200;  // Code for OK
            res.setHeader('Content-Type', 'text/plain');
            res.write(responseString);  // Send the computed result
        } else {
            res.statusCode = 400;  // Bad request if parameters are missing or invalid
            res.write("Please provide valid numbers for x and y.");
        }

        res.end();
    } else {
        res.statusCode = 404;  // Handle other methods (not GET)
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);  // Log the start of the server
});
