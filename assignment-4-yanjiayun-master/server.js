/* Name: Jiayun Yan
 * Email: yanjia@oregonstate.edu*/

var http = require('http');
var fs = require('fs');
var index_html = fs.readFileSync('public/index.html');
var style = fs.readFileSync('public/style.css');
var index_js = fs.readFileSync('public/index.js');
var html_404 = fs.readFileSync('public/404.html');
var port = process.env.PORT;

if(typeof port == 'undefined' || port == null){
    port = 3000;
}
else{
    port = process.env.PORT;
}

http.createServer(function (req, res) {
  console.log("method:", req.method);
  console.log("url:", req.url);
  console.log("headers:", req.headers);
  
  if (req.url == '/style.css') {
    res.writeHead(200, {"content-type": "text/css"});
    res.write(style);
  }
  else if (req.url == '/index.html') {
    res.writeHead(200, {"content-type": "text/html"});
    res.write(index_html);
  }
  else if (req.url == '/') {
    res.writeHead(200, {"content-type": "text/html"});
    res.write(index_html);
  }
  else if (req.url == '/404.html') {
    res.writeHead(200, {"content-type": "text/html"});
    res.write(html_404);
  }  
  else if (req.url == '/index.js') {
    res.writeHead(200, {"content-type": "application/javascript"});
    res.write(index_js);
  }
  else {
    res.writeHead(404, {"content-type": "text/html"});
    res.write(html_404);
  }
  res.end();
}).listen(port);
