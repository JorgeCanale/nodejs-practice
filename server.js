//import en modules
import {createServer} from 'node:http'; //http es un modulo de nodejs 
import {getPost} from './post.js'

const hostname = process.env.HOST; 
const port = process.env.PORT || 3000;
const server = createServer((req, res) => {

  if(req.url === "/"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); 
    res.end("<h3> Home page</h3>");
  }else if(req.url === "/posts"){
    let posts = getPost()
    res.writeHead(200,{'Conten-Type': 'application/json'})
    res.end(JSON.stringify(posts));
  }else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Page not found </h1>");
  }
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});