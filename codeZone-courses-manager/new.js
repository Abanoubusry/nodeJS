import { createServer } from 'node:http';
import  fs from 'node:fs';

const homePage = fs.readFileSync('./views/index.html','utf8');

const server = createServer((req, res) => {
    console.log("#########req.url########")
    console.log(req.url);
    if (req.url==="/"){
        res.write(homePage)
    }else if(req.url==='/about'){
res.write("<h1>About page</h1>")
    }else{
        res.write("<h1>Not found page</h1>")
    }
    
    res.end(

    );
});

server.listen(5000, 'localhost', () => {
    console.log('Listening on port 5000');
});
