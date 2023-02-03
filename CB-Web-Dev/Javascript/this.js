
function checkThis(){
  console.log(this);  // this is a pointer to the entire window 
}

// object contains (key,value) pair . 
// key are  always string .

let obj={
  a:10,
  b:'asdf',
  c:true,

  d:function(){
    console.log(this);  // this is a pointer to the object obj.
  },

  e:{
    l:234,
    m:"bcdef",
    n:true,

    o:function(){
      console.log(this);  // thsi is a pointer to the object e
    },
  },
}



