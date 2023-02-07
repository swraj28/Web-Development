const { response } = require('express')
const express= require('express')
const path=require('path')

const port= 8000

const DB= require('./config/mongoose')  // Connecting to the database 

const Contact= require('./models/contact') // Schema

const app=express()

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended: true}))

app.use(express.static('assets'))

app.get('/',(req,res)=>{

  Contact.find({},(err,contacts)=>{
    if(err){
      console.log('Error While Fetching Contacts from db')
    }
    return res.render('home', {
      title: "Contacts List",
      contact_list:contacts
    })
  })
})

app.get('/practice',(req,res)=>{
  return res.render('practice',{
    title:"Let us Play with ejs"
  })
})

app.post('/create-contact', async (req,res)=>{
  console.log(req.body);
  try{
    const contact= await Contact.create(req.body);
    
    console.log('-------Contact Details--------');
    console.log(contact);

    return res.redirect('/');
  }catch(e){
    console.log(e.toString());
  }
})

app.get('/delete-contact',(req,res)=>{

  let id=req.query.id;

  Contact.findByIdAndDelete(id,(err)=>{
    if(err){
      console.log('Error in Deleting an Object From the DB');
      return;
    }
    return res.redirect('/');
  })
})



app.listen(port,(err)=>{
  if(err){
    console.log('Error in running the server',err)
  }
  console.log('The server is running on the port: ',port)
})