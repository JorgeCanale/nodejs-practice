import {createServer} from 'node:http';
import {logger,JSONMiddleware} from './middleware.js';

const PORT = process.env.PORT2;

const users = [
    {id: 1, name: "pedro",},
    {id: 2, name: "marcos"},
    {id: 3, name: "juan"}
];


const server = createServer((req,res)=>{
    logger(req,res,()=>{
        if(req.url === "/api/users"){
            res.end(JSON.stringify(users));
        }
    });


});

server.listen(PORT,(req,res)=>{
    console.log(`Server is running on port: ${PORT}`);
    
});