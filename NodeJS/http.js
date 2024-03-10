const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url, req.method, req.headers);
    // console.log('name');
    // process.exit();

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>first apge</title></head>');
    res.write('<body><div>Content</div></body>');
    res.write('/<html>');
    res.end();
});

server.listen(4000);