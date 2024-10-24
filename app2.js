const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table border="1">')
    res.write('<thead>')
       res.write('<tr>')
       res.write('<th>Restaurant Name</th>')
            res.write('<th>Why I Recommend It</th>')
            res.write('<th>Location</th>')
            res.write('</tr>')
            res.write('</thead>')
            res.write('<tbody>')
            res.write('<tr>')
            res.write('<td>Udipi Hotel</td>')
            res.write('<td>Best vegetarian food with traditional flavors</td>')
            res.write('<td>Godavari Bund</td>')
            res.write('</tr>')
            res.write('<tr>')
            res.write('<td>Sri Kanya Comfort</td>')
            res.write('<td>Delicious Andhra-style meals</td>')
            res.write('<td>Pushkar Ghat</td>')
            res.write('</tr>')
            res.write('<tr>')
            res.write('<td>Rose Milk Shop</td>')
            res.write('<td>Famous for its refreshing rose milk</td>')
            res.write('<td>Main Road</td>')
            res.write('</tr>')
            res.write('<tr>')
            res.write('<td>Vijay Durga Mess</td>')
            res.write('<td>Authentic home-cooked meals</td>')
            res.write('<td>Kotipalli Bus Stand</td>')
            res.write('</tr>')
            res.write(' </tbody></table>')   
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})