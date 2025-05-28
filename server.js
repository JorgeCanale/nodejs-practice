//import en modules
import {createServer} from 'node:http' //http es un modulo de nodejs 
const hostname = process.env.HOST; 
const port = process.env.PORT || 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  /*en el caso de enviar codigo html el content-type siempre debe ser html ya que si lo envio como 
  content-type text/plain el codigo html aparecera como un texto y no como un titulo de primer nivel
  (en este caso) */
  res.end('<h3> OMG EL SERVER FUNCIONA!!! </h3>');

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});