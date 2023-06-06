
const mongoose=require('mongoose')

const DB='mongodb+srv://swraj28:Swraj%4028@cluster0.55nvgmh.mongodb.net/contact_list?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);

mongoose.connect(DB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log('connection successful');
}).catch((err)=>console.log('no connection'));

