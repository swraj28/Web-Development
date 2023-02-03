const express = require('express')

const app = express()  // Web Server 

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('Welcome to the tutorial of Express js')
})

app.get('/greet',(req,res)=>{

    let person='Swraj Kant Sharma'

    if(req.query.person){
        person=req.query.person
    }

    res.send('Good Morning '+ person)
})

//localhost:3333/{x}/{y}
app.get('/:city/:greetings',(req,res)=>{
    res.send(req.params.greetings + ' to ' + req.params.city);
})

app.post('/greet',(req,res)=>{

    let person='Guest'
    console.log(req.body)

    if(req.body.person){
        person=req.body.person
    }

    res.send('Good Morning '+ person)
})

app.get('/html_read',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

function middleware1 (req, res, next) {
    console.log(req.url)
    next()
}
function middleware2 (req, res, next) {
    
    console.log(req.hostname)

    res.send('Swraj Kant Sharama')
}


app.get('/x', middleware1, middleware2)

/************************************************************************* */

// app.listen starts the server on certain port 
// Always allot the port number to be greater than 1024 as 0 to 1024 is reserved. 

// Servers havae a Network Interface ..
app.listen(3333, () => {
    console.log('server started on http://0.0.0.0:3333')  // or 127.0.0.1:3333
})