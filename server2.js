// Connect Router
let connect = require('connect');
let connectRoute = require('connect-route');

let url = require('url')

let requestHandlers = function(router){
    router.get('/', function(req,resp){
        resp.setHeader('Content-Type','text/html');
        resp.end('<h1>Hello World</h1>');
    });

    //parameter 응답
    router.get('/hello', function(req,resp){
        let query = url.parse(req.url, true).query;
        console.log(query);

        resp.setHeader('Content-Type','text/html');
        resp.end('<h1>Hello : </h1>');
    });

    // no 응답
    router.get('/board/view/:no', function(req,resp){
        console.log(req.params['no']);

        resp.setHeader('Content-Type','text/html');
        resp.end('<h1>Hello</h1>');
    });

    //json 응답
    router.get('/api/user/checkemail', function(req,resp){
        let result = {
            result : true,
            data : "exists"
        }

        resp.setHeader('Content-Type','application/json');
        resp.end(JSON.stringify(result));
    });
}

let app = connect();
app.use(connectRoute(requestHandlers), null);

// request가 오면 chain이 걸린다.
app.listen(3000);