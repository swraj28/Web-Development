const express= require('express')

const app=express()
const port=8000

// Setting the view engine to ejs 
app.set('view engine','ejs')

//route for index page
app.get("/", function (req, res) {
  var characters = [
    {
      name: 'Harry',
      designation: "Student"
    },
    {
      name: 'Dumbledore',
      designation: "Headmaster"
    },
    {
      name: 'Snape',
      designation: "Professor"
    },
    {
      name: 'Hermione',
      designation: "Student"
    }
  ];
  var subheading = "I though we should involve some magic";
  res.render("index", {
    characters: characters,
    subheading: subheading
  });
});

app.listen(port,(err)=>{
  if(err){
    console.log('Error in running the server',err)
  }
  console.log('The server is running on the port: ',port)
})