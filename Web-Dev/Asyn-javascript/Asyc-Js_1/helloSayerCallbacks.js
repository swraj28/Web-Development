
function hellosayer(times,name,doneSaying){

  let count=0;
  let loopId=setInterval(()=>{
    count++;
    console.log("Hello "+name);
    if(count===times){
      clearInterval(loopId);
      doneSaying();
    }
  },100)
}

hellosayer(3,'Swraj',()=>{
  hellosayer(3,'Prakash');
})

module.exports={
  hellosayer
}