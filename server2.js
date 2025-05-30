import {createServer} from 'node:http';


const PORT = process.env.PORT2;

const users = [
    {id: 1, name: "pedro",},
    {id: 2, name: "marcos"},
    {id: 3, name: "juan"}
];


const server = createServer((req,res)=>{

    if(req.url === "/api/users"){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users))
    }
    console.log(req);
    

});

server.listen(PORT,(req,res)=>{
    console.log(`Server is running on port: ${PORT}`);
    
});