/* 
Start server with "npm start" command in the terminal
*/

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 6000;

//middlewares
app.use(express.json());
app.use(cors());


//route
app.post("/helloMessage", (req,res) => {

res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body><pHello My name is Kemboi Lovestrant; I would love to be a part of pesapal..</p></body></html>');
res.end();
});

app.post("/", (req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.send(`Hello world`);
res.end();
})



app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
    
});
