//Zadanie 1
let time = 0 ;
const interval = setInterval(() => {
    time += 1;
    console.log(`Cześć po raz ${time}`);
    if(time >= 15)
        {
            clearInterval(interval);
        }
    
} , 1000);

//Zadanie 2
var table=[1,2,6,0,1]

setTimeout(()=>{
  for(let i=0;i<table.length;i++)    {
      console.log(table[i]);
  }     

let i=0;
    var interval = setInterval(()=>{
        console.log(table[i]);
        i++
      if (i>table.length) {
          clearInterval(interval);
      }
    },3000)
        
    
  
           
}, 2000);