const express= require('express')
const path=require('path')

const port= 8000

const app=express()

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended: true}))

app.use(express.static('assets'))

// middleware 1

// app.use((req,res,next)=>{
//   req.my_name="Swraj";
//   console.log('Middleware 1 called')
//   next()
// });

// // middleware 2
// app.use((req,res,next)=>{
//   console.log('Calling From Middleware 2',req.my_name);
//   console.log('Middleware 2 Called')
//   next();
// })

var contactList =[
  {
    name:"Swraj",
    phone:"111111111"
  },
  {
    name:"Tony Stark",
    phone:"1234567890"
  },
  {
    name:"Prakash",
    phone:"0987654321"
  },
]

app.get('/',(req,res)=>{
  // console.log(__dirname);
  // res.send('<h1>Welcome to the Express Server </h1>')
  // console.log('Calling From get methode', req.my_name);
  return res.render('home', {
    title: "Contacts List",
    contact_list:contactList
  })
})

app.get('/practice',(req,res)=>{
  return res.render('practice',{
    title:"Let us Play with ejs"
  })
})

app.post('/create-contact',(req,res)=>{
  // console.log(req.body);
  // console.log(req.body.name)
  // console.log(req.body.phone)

  // contactList.push({
  //   name:req.body.name,
  //   phone:req.body.phone,
  // });

  contactList.push(req.body)

  return res.redirect('/');
})

app.post('/delete-contact',(req,res)=>{
  contactList.pop();
  return res.redirect('/');
})



app.listen(port,(err)=>{
  if(err){
    console.log('Error in running the server',err)
  }
  console.log('The server is running on the port: ',port)
})