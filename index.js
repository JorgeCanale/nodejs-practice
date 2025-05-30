import {createServer} from 'node:http';

const PORT = process.env.PORT2;

const server = createServer((req,res)=>{
    /* esta es una de las formas en las que podemos fijar el statusCode de la respuesta que da nuestro
    servidor y definir tambien el tipo de contenido que deseamos enviar*/ 
    //  res.setHeader('Conten-Type', 'text/plain');
    // res.statusCode(200);
    /*asi mismo existe la posibilidad de al setear el header setear el statusCode de la respuesta y es de
    la siguiente manera */
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({message: "Server Error"}));
});

server.listen(PORT,(req,res)=>{
    console.log(`Server is running on port: ${PORT}`);
    
});