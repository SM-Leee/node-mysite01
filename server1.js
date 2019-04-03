// connect 연결
// connect alt+enter
let connect = require('connect')

let logger = function(req, resp, next){
    console.log('%s %s', req.method, req.url);
    next()
}

let hello = function(req, resp, next){
    resp.setHeader('Content-Type','text/html');
    resp.end('<h1>Hello World</h1>');
    next()
}

let app = connect();
app.use(logger, null);
app.use(hello, null);

// request가 오면 chain이 걸린다.
app.listen(3000);