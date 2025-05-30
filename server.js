//import en modules
import {createServer} from 'node:http'; //http es un modulo de nodejs 
import {getPost} from './post.js'

const hostname = process.env.HOST; 
const port = process.env.PORT || 3000;
const server = createServer((req, res) => {

  try {
    if(req.method === 'GET'){

        if(req.url === "/"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); 
    res.end("<h3> Home page</h3>");
  }else if(req.url === "/posts"){
    let posts = getPost();
    res.writeHead(200,{'Conten-Type': 'application/json'});
    res.end(JSON.stringify(posts));
  }
    }else{
      throw new Error('Method not allowed')
    }
  } catch (error) {
    res.writeHead(500,{'Content-Type': 'text/plain'})
    res.end('Server error')
  }


});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});