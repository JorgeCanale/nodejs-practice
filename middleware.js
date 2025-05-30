
const logger =( req,res,next)=>{
    console.log(`${req.method}, ${req.url}`);
    next();
};

const JSONMiddleware =(req,res,next)=>{
    res.setHeader('Content-Type', 'application/json');
};

export  {logger,JSONMiddleware} ;