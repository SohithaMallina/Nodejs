const http = require('http');

// Define the item type and its properties
const items = [
    { name: "Striped Socks", cost: 5 },
    { name: "Polka Dot Socks", cost: 7 },
    { name: "Funny Socks", cost: 6 },
    { name: "Warm Wool Socks", cost: 8 },
    { name: "Athletic Socks", cost: 4 },
];

// Array to track whether each item has been used
const usedItems = Array(items.length).fill(false);

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Generate a random index
    let index = Math.floor(Math.random() * items.length);

    // Check for an unused item
    let itemFound = false;
    for (let i = 0; i < items.length; i++) {
        const checkIndex = (index + i) % items.length; // Wrap around if necessary
        if (!usedItems[checkIndex]) {
            usedItems[checkIndex] = true; // Mark as used
            index = checkIndex; // Update to the used index
            itemFound = true;
            break;
        }
    }

    // Generate the response content
    let responseContent;
    if (itemFound) {
        const item = items[index];
        responseContent = `
            <html>
                <head>
                    <title>Socks by Sohitha</title>
                </head>
                <body>
                    <h1>My Collection of Socks</h1>
                    <p>Item Index: ${index}</p>
                    <p>Item Name: ${item.name}</p>
                    <p>Item Cost: $${item.cost}</p>
                </body>
            </html>
        `;
    } else {
        responseContent = `
            <html>
                <head>
                    <title>Socks by Sohitha</title>
                </head>
                <body>
                    <h1>My Collection of Socks</h1>
                    <p>Nothing left</p>
                </body>
            </html>
        `;
    }

    // Send the response
    res.end(responseContent);
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
