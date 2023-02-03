const express= require('express')
const port= 8000

const app=express()

app.get('/',(req,res)=>{
  res.send('Welcome to a basic express server ')
})







app.listen(port,(err)=>{
  if(err){
    console.log('Error in running the server',err)
  }
  console.log('The server is running on the port: ',port)
})