const http = require('http');
const fs = require('fs');
const { equal } = require('assert');
const { parse } = require('path');
const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url, req.method, req.headers);
    // console.log('name');
    // process.exit();
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        let t = fs.readFileSync('message.txt');
        console.log('data'+ t);
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>'+t+'<form action="message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
        res.write('<html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log (chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt',message);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        // fs.writeFileSync('message.txt','DUmmy');
        // res.statusCode = 302;
        // res.setHeader('Location', '/');
        // return res.end();
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>first apge</title></head>');
    res.write('<body><div>Content</div></body>');
    res.write('<html>');
    res.end();
});

server.listen(4000);