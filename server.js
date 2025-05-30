//import en modules
import {createServer} from 'node:http'; //http es un modulo de nodejs 
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
import {getPost} from './post.js';

const hostname = process.env.HOST; 
const port = process.env.PORT || 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = createServer( async(req, res) => {
  try {
    if(req.method === 'GET'){
      let filepath;
        if(req.url === "/"){
          filepath = path.join(__dirname, 'public','index.html');
          console.log(filepath);
        }else if(req.url === "/about"){
          filepath = path.join(__dirname, 'public', 'about.html');
          console.log(filepath);
        }else{
          throw new Error('Not Found');
        }

        const data = await fs.readFile(filepath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
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