
function hellosayer(times,name){

  return new Promise((resolve,reject)=>{
    let count=0;
    let loopId=setInterval(()=>{
      count++;
      console.log("Hello "+name);
      if(count===times){
        clearInterval(loopId);
        resolve();
      }
    },100)
  })
}

async function task(){

  await Promise.all([  // Running these 3 parallely 
    hellosayer(3,'Swraj'),
    hellosayer(3,'Prakash'),
    hellosayer(3,'Mohit')
  ])

  console.log('--------first batch over---------')

  await Promise.all([  // Running these 3 sequentially 
    await hellosayer(3,'Piyush'),
    await hellosayer(3,'Ankit'),
    await hellosayer(3,'Satish')
  ])
}
task()