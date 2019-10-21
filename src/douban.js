let in_theaters = require('./json/in_theaters');
let free_watch = require('./json/free_watch');
let coming_soon = require('./json/coming_soon');

let http = require('http');
// let urlObj = require('url');
let fs = require('fs');

http.createServer((req,res)=>{
    if(req.url.startsWith('/api/in_theaters')){
        res.writeHead(200,{"Content-type": "text/html;charset=UTF-8"});
        res.end(JSON.stringify(in_theaters));
    }else if(req.url.startsWith('/api/free_watch')){
        res.writeHead(200,{"Content-type": "text/html;charset=UTF-8"});
        res.end(JSON.stringify(free_watch));
    }else if(req.url.startsWith('/api/coming_soon')){
        res.writeHead(200,{"Content-type": "text/html;charset=UTF-8"});
        res.end(JSON.stringify(coming_soon));
    }
}).listen(4000);
