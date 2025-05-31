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
            let user = req.url.split('/')[3];
            console.log(typeof(user));
            
            if(typeof(user) === "int"){
            let userInfo = users.find((usuario)=>{ usuario.id === user});
            console.log(userInfo);
            res.end(JSON.stringify(userInfo));
        }else{
            res.end(JSON.stringify(users));
        }
        }
        });


});

server.listen(PORT,(req,res)=>{
    console.log(`Server is running on port: ${PORT}`);
    
});