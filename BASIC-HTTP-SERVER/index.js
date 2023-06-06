
const http= require('http');
const port= 8000 // ports are basically unique id for every server

const fs= require('fs')

function requestHandler(req,res){

  const log =`${Date.now()}: ${req.url}: New Req Received \n`;

  fs.appendFile("log.txt",log,(err,res)=>{
    if(err){
      console.log(err);
      return;
    }
    console.log(req.url);
  });

  let filePath;
  
  switch(req.url){
    case '/':
      filePath='./index.html'
      break;
    case '/profile':
      filePath='./profile.html'
      break;
    default:
      filePath='./404.html'
  }

  fs.readFile(filePath,function(err,data){
    if(err){
      console.log('error',err);
      return res.end('<h1>Error!</h1>');
    }
    return res.end(data);
  });
}

const server= http.createServer(requestHandler);

server.listen(port,function(err){
  if(err){
    console.log(err);
    return;
  }
  console.log("Server is Up and running " ,port);
});
