let connect = require('connect');
let connectRoute = require('connect-route');
let serveStatic = require('serve-static');
let fs = require('fs');


// css 파일과 image 파일은 어떻게 처리하는가?
// http://localhost:4000/main/index.html
let app = connect();
app.use(serveStatic(__dirname + "/htdocs"), null);

app.use(connectRoute(function(router){
    router.get('/', function(req,resp){
        fs.readFile(__dirname+"/htdocs/main/index.html", "utf-8", function(error, data){
            resp.writeHead(200,{
                'Content-Type':'text/html'
            })
            resp.end(data)
        });
    });
}), null);

app.listen(4000);